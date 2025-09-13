import { Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';
import quizData from '../mocks/quizData';

const QuizGame = ({ onNavigate }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [showHint, setShowHint] = useState(false);
    // Light-only theme + responsive
    const [vpWidth, setVpWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    // Hover state for the chat feedback card
    const [isFeedbackHover, setIsFeedbackHover] = useState(false);

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const totalQuestions = quizData.questions.length;
    const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;
    const selectedAnswerIndex = userAnswers[currentQuestionIndex];

    // Use global site background; do not override body background here
    // Setup responsive listener
    useEffect(() => {
        const onResize = () => setVpWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleAnswerOptionClick = (index) => {
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        setUserAnswers({ ...userAnswers, [currentQuestionIndex]: index });
    };

    const handleNextQuestion = () => {
        setShowHint(false);
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setShowHint(false);
        }
    };

    const handleReviewQuiz = () => {
        setCurrentQuestionIndex(0);
        setShowResult(false);
    };

    const handlePlayAgain = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setShowResult(false);
        setShowHint(false);
    };

    const calculateScore = () => {
        let correctCount = 0;
        let incorrectCount = 0;
        let skippedCount = 0;

        quizData.questions.forEach((question, index) => {
            const userAnswerIndex = userAnswers[index];
            if (userAnswerIndex !== undefined) {
                const isCorrect = question.answerOptions[userAnswerIndex].isCorrect;
                if (isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            } else {
                skippedCount++;
            }
        });

        return {
            correct: correctCount,
            incorrect: incorrectCount,
            skipped: skippedCount,
            total: quizData.questions.length
        };
    };

    const scoreData = calculateScore();
    const accuracy = (scoreData.correct / scoreData.total) * 100;

    // Light theme colors with red/yellow accents
    const COLORS = {
        text: '#333',
        subtle: '#666',
        subtle2: '#777',
        border: '#e0e0e0',
        panelBg: 'rgba(255,255,255,0.92)',
        primary: '#da251d',
        gold: '#ffd700',
        correct: '#00c853',
        incorrect: '#e53935',
    };

    const getStyles = (element) => {
        const isMobile = vpWidth < 768;
        const isSmall = vpWidth < 480;
        const baseStyles = {
            quizContainer: {
                fontFamily: `'Google Sans Flex', 'Google Sans', 'Helvetica Neue', sans-serif`,
                maxWidth: '1000px',
                margin: '20px auto',
                borderRadius: '24px',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                backgroundColor: COLORS.panelBg,
                color: COLORS.text,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '70vh',
            },
            header: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '12px 16px' : '16px 24px',
                borderBottom: `1px solid ${COLORS.border}`,
            },
            title: {
                fontSize: isMobile ? '0.95em' : '1em',
                fontWeight: 'bold',
                color: COLORS.text,
            },
            headerControls: {
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
            },
            progressArea: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
            },
            progressBarContainer: {
                width: '100px',
                height: '4px',
                backgroundColor: COLORS.border,
                borderRadius: '2px',
                overflow: 'hidden',
            },
            progressBar: {
                height: '100%',
                width: `${progressPercentage}%`,
                backgroundColor: COLORS.primary,
                transition: 'width 0.5s ease-in-out',
            },
            questionCount: {
                fontSize: '0.9em',
                color: COLORS.subtle2,
            },
            controlButton: {
                background: 'none',
                border: 'none',
                color: '#888',
                fontSize: '1.5em',
                cursor: 'pointer',
                lineHeight: '1',
            },
            mainContent: {
                padding: isMobile ? '20px 16px' : '32px 64px',
                flexGrow: '1',
            },
            questionText: {
                fontSize: isSmall ? '1.3em' : isMobile ? '1.5em' : '1.75em',
                fontWeight: '400',
                lineHeight: '1.5',
                marginBottom: '40px',
                color: COLORS.text,
                textAlign: 'left',
            },
            answerSection: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '32px',
            },
            answerBox: {
                padding: '12px 16px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: selectedAnswerIndex !== undefined ? 'not-allowed' : 'pointer',
                backgroundColor: '#f5f5f5',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                textAlign: 'start',
            },
            answerBoxHover: {
                backgroundColor: '#eee',
            },
            answerBoxCorrect: {
                border: '1px solid #00c853',
                backgroundColor: '#d4f6e6',
            },
            answerBoxIncorrect: {
                border: '1px solid #e53935',
                backgroundColor: '#fddbdc',
            },
            answerBoxFaded: {
                opacity: 0.6,
            },
            answerText: {
                fontSize: '1em',
                fontWeight: 'normal',
                color: COLORS.text,
                margin: '0',
            },
            statusMessage: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            },
            statusText: {
                fontSize: '0.9em',
                fontWeight: '500',
            },
            correctStatusText: {
                color: COLORS.correct,
            },
            incorrectStatusText: {
                color: COLORS.incorrect,
            },
            rationaleText: {
                fontSize: '0.9em',
                lineHeight: '1.4',
                color: '#555',
                margin: '0',
            },
            bottomSection: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '12px 16px' : '16px 24px',
                borderTop: `1px solid ${COLORS.border}`,
                fontSize: '0.85em',
                color: COLORS.subtle2,
            },
            hintButton: {
                background: 'none',
                border: 'none',
                color: COLORS.subtle2,
                cursor: 'pointer',
                fontSize: '1em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            },
            hintText: {
                padding: '12px',
                borderRadius: '12px',
                backgroundColor: '#fffbe6',
                border: `1px solid #ffe58f`,
                color: '#664d03',
                marginBottom: '12px',
                fontSize: '0.95em',
            },
            nextButton: {
                padding: '10px 22px',
                borderRadius: '18px',
                border: 'none',
                background: COLORS.primary,
                color: '#fff',
                fontSize: '1em',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            },
            nextButtonDisabled: {
                opacity: 0.3,
                cursor: 'not-allowed',
                boxShadow: 'none',
            },
            resultScreen: {
                padding: isMobile ? '24px 16px' : '40px 64px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                textAlign: 'center',
            },
            resultTitle: {
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: COLORS.text,
                marginBottom: '10px',
                textAlign: 'left'
            },
            resultSubtitle: {
                fontSize: '1.2em',
                color: COLORS.subtle,
                marginBottom: '40px',
                textAlign: 'left'
            },
            statsGrid: {
                display: 'grid',
                gridTemplateColumns: vpWidth < 900 ? '1fr' : 'repeat(3, 1fr)',
                gap: '16px',
                width: '100%',
                marginBottom: '28px',
            },
            statCard: {
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                textAlign: 'left',
            },
            statTitle: {
                fontSize: '0.85em',
                color: '#555',
                marginBottom: '8px',
            },
            statTitle2: {
                fontSize: '0.9em',
                color: '#555',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold'
            },
            statValue: {
                fontSize: '1.8em',
                fontWeight: 'bold',
                color: '#000',
            },
            statSubtitle: {
                fontSize: '0.95em',
                color: '#555',
            },
            feedbackCard: {
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#f0f0f0',
                border: `1px solid #ddd`,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            },
            feedbackCardHover: {
                backgroundColor: '#eaeaea',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                border: `1px solid ${COLORS.gold}`,
            },
            feedbackIcon: {
                fontSize: '2em',
                color: COLORS.primary,
            },
            feedbackText: {
                flexGrow: 1,
            },
            feedbackTitle: {
                fontSize: '1.05em',
                fontWeight: 'bold',
                marginBottom: '8px',
            },
            feedbackButton: {
                padding: '12px 24px',
                borderRadius: '20px',
                background: COLORS.primary,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
            },
            continueLearning: {
                fontSize: isMobile ? '1.3em' : '1.5em',
                fontWeight: 'bold',
                marginBottom: '24px',
                textAlign: 'left'
            },
            learningGrid: {
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '16px',
                width: '100%',
            },
            learningCard: {
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                textAlign: 'left',
                position: 'relative',
            },
            learningIcon: {
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '1.6em',
                color: '#777',
            },
            learningTitle: {
                fontSize: '1em',
                fontWeight: 'bold',
                marginBottom: '8px',
            },
            learningDescription: {
                fontSize: '0.85em',
                color: '#555',
                lineHeight: '1.4',
            },
            actionButtons: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                marginTop: '28px',
                width: '100%'
            },
            backButton: {
                background: 'none',
                border: 'none',
                color: COLORS.text,
                fontSize: '1em',
                cursor: 'pointer',
                marginRight: 'auto',
            }
        };
        return baseStyles[element] || {};
    };

    const getAnswerBoxStyles = (index) => {
        let style = { ...getStyles('answerBox') };
        const isAnswered = selectedAnswerIndex !== undefined;
        const isSelected = selectedAnswerIndex === index;
        const isCorrect = currentQuestion.answerOptions[index].isCorrect;

        if (isAnswered) {
            style = { ...style, cursor: 'not-allowed' };
            if (isSelected) {
                style = { ...style, ...(isCorrect ? getStyles('answerBoxCorrect') : getStyles('answerBoxIncorrect')) };
            } else if (isCorrect) {
                style = { ...style, ...getStyles('answerBoxCorrect') };
            } else {
                style = { ...style, ...getStyles('answerBoxFaded') };
            }
        }
        return style;
    };

    return (
        <div style={getStyles('quizContainer')}>
            <div style={getStyles('header')}>
                <span style={getStyles('title')}>{quizData.title}</span>
                <div style={getStyles('headerControls')}>
                    <div style={getStyles('progressArea')}>
                        <div style={getStyles('progressBarContainer')}>
                            <div style={getStyles('progressBar')}></div>
                        </div>
                        <span style={getStyles('questionCount')}>
                            {showResult ? '' : `${currentQuestionIndex + 1}/${totalQuestions}`}
                        </span>
                    </div>
                    <button style={getStyles('controlButton')} onClick={() => window.location.reload()}>
                        &#x2715;
                    </button>
                </div>
            </div>

            {showResult ? (
                <div style={getStyles('resultScreen')}>
                    <h1 style={getStyles('resultTitle')}>Bạn làm được rồi! Đã hoàn thành bài kiểm tra</h1>
                    <div style={getStyles('statsGrid')}>
                        <div style={getStyles('statCard')}>
                            <div style={getStyles('statTitle')}>Điểm</div>
                            <div style={getStyles('statValue')}>{scoreData.correct}/{scoreData.total}</div>
                        </div>
                        <div style={getStyles('statCard')}>
                            <div style={getStyles('statTitle')}>Độ chính xác</div>
                            <div style={getStyles('statValue')}>{accuracy.toFixed(0)}%</div>
                        </div>
                        <div style={getStyles('statCard')}>
                            <div style={getStyles('statTitle2')}>
                                <div>Đúng</div>
                                <div>{scoreData.correct}</div>
                            </div>
                            <div style={getStyles('statTitle2')}>
                                <div>Sai</div>
                                <div>{scoreData.incorrect}</div>
                            </div>
                            <div style={getStyles('statTitle2')}>
                                <div>Đã bỏ qua</div>
                                <div>{scoreData.skipped}</div>
                            </div>
                        </div>
                    </div>
                    <Tooltip title="Mở chat box để tìm hiểu thêm" placement="top">
                        <div
                            role="button"
                            style={{
                                ...getStyles('feedbackCard'),
                                ...(isFeedbackHover ? getStyles('feedbackCardHover') : {}),
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setIsFeedbackHover(true)}
                            onMouseLeave={() => setIsFeedbackHover(false)}
                            onClick={() => window.open('https://chatgpt.com/g/g-68c4e3f247488191abcb7181c60ee725-doc-lap-dan-toc-cua-ho-chi-minh-va-cac-tien-nhan', '_blank', 'noopener,noreferrer')}
                        >
                            <span style={getStyles('feedbackIcon')}>💬</span>
                            <div style={getStyles('feedbackText')}>
                                <div style={getStyles('feedbackTitle')}>
                                    Nếu bạn muốn tìm hiểu thêm về "Tư tưởng độc lập của Hồ Chí Minh" thì hãy hỏi thêm chat box nhé
                                </div>
                                <p style={getStyles('learningDescription')}>
                                    Nhấn vào đây để mở chat box trong tab mới
                                </p>
                            </div>
                        </div>
                    </Tooltip>
                    <div style={getStyles('actionButtons')}>
                        <button onClick={handleReviewQuiz} style={{ ...getStyles('nextButton'), background: 'none', color: COLORS.text }}>
                            Xem lại bài kiểm tra
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div style={getStyles('mainContent')}>
                        <div style={getStyles('questionText')}>{currentQuestion.questionNumber}. {currentQuestion.question}</div>

                        <div style={getStyles('answerSection')}>
                            {currentQuestion.answerOptions.map((option, index) => {
                                const isSelected = selectedAnswerIndex === index;
                                const isAnswered = selectedAnswerIndex !== undefined;
                                const isCorrect = option.isCorrect;

                                const answerBoxStyle = {
                                    ...getStyles('answerBox'),
                                    ...(isAnswered && isSelected && isCorrect ? getStyles('answerBoxCorrect') : {}),
                                    ...(isAnswered && isSelected && !isCorrect ? getStyles('answerBoxIncorrect') : {}),
                                    ...(isAnswered && !isSelected && isCorrect ? getStyles('answerBoxCorrect') : {}),
                                    ...(isAnswered && !isSelected && !isCorrect ? getStyles('answerBoxFaded') : {}),
                                    ...(isAnswered ? { cursor: 'not-allowed' } : {}),

                                };

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleAnswerOptionClick(index)}
                                        style={answerBoxStyle}
                                    >
                                        <p style={getStyles('answerText')}>{String.fromCharCode(65 + index)}. {option.text}</p>

                                        {isAnswered && isSelected && (
                                            <>
                                                <div style={getStyles('statusMessage')}>
                                                    <span style={option.isCorrect ? getStyles('correctStatusText') : getStyles('incorrectStatusText')}>
                                                        {option.isCorrect ? '✓ Câu trả lời chính xác' : '✕ Chưa đúng lắm!'}
                                                    </span>
                                                </div>
                                                <p style={getStyles('rationaleText')}>{option.rationale}</p>
                                            </>
                                        )}
                                        {isAnswered && !isSelected && isCorrect && (
                                            <>
                                                <div style={getStyles('statusMessage')}>
                                                    <span style={getStyles('correctStatusText')}>
                                                        ✓ Câu trả lời chính xác
                                                    </span>
                                                </div>
                                                <p style={getStyles('rationaleText')}>{option.rationale}</p>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {showHint && (
                            <div style={getStyles('hintText')}>
                                <strong>Gợi ý:</strong> {currentQuestion.hint}
                            </div>
                        )}
                    </div>
                    <div style={getStyles('bottomSection')}>
                        <button
                            onClick={() => setShowHint(!showHint)}
                            style={getStyles('hintButton')}
                        >
                            Hiện gợi ý {showHint ? '▲' : '▼'}
                        </button>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            {currentQuestionIndex > 0 && (
                                <button
                                    onClick={handlePrevQuestion}
                                    style={{
                                        ...getStyles('nextButton'),
                                        background: 'none',
                                        color: COLORS.text
                                    }}
                                >
                                    Quay lại
                                </button>
                            )}
                            <button
                                onClick={handleNextQuestion}
                                style={{
                                    ...getStyles('nextButton'),
                                    ...(selectedAnswerIndex !== undefined ? {} : getStyles('nextButtonDisabled')),
                                }}
                                disabled={selectedAnswerIndex === undefined}
                            >
                                {currentQuestionIndex < totalQuestions - 1 ? 'Tiếp theo' : 'Hoàn thành'}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizGame;