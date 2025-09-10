import React, { useState, useEffect } from 'react';

const quizData = {
    title: "Trắc nghiệm: Tư tưởng độc lập của Hồ Chí Minh",
    questions: [
        {
            questionNumber: 1,
            question: "Điểm khác biệt cơ bản về mục tiêu độc lập dân tộc của Hồ Chí Minh so với các phong trào yêu nước cuối thế kỷ 19, đầu thế kỷ 20 là gì?",
            answerOptions: [
                {
                    text: "Độc lập dân tộc phải được giành bằng bạo động cách mạng.",
                    rationale: "Đây là con đường mà nhiều nhà yêu nước đã lựa chọn, nhưng Hồ Chí Minh đã phát triển nó thành một hệ thống lý luận hoàn chỉnh gắn với mục tiêu cuối cùng.",
                    isCorrect: false
                },
                {
                    text: "Độc lập dân tộc phải thông qua con đường cải cách văn hóa, xã hội.",
                    rationale: "Đây là tư tưởng của Phan Châu Trinh, chỉ là một phần trong cách mạng giải phóng dân tộc của Hồ Chí Minh.",
                    isCorrect: false
                },
                {
                    text: "Độc lập dân tộc phải dựa vào sự giúp đỡ của các nước đế quốc khác.",
                    rationale: "Quan điểm này giống với một số nhà yêu nước tiền bối như Phan Bội Châu nhưng không phải là tư tưởng của Hồ Chí Minh.",
                    isCorrect: false
                },
                {
                    text: "Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội và giải phóng giai cấp.",
                    rationale: "Đây là điểm cốt lõi và sáng tạo nhất trong tư tưởng độc lập của Hồ Chí Minh, khác với các phong trào chỉ tập trung vào giành độc lập dân tộc đơn thuần.",
                    isCorrect: true
                }
            ],
            hint: "Hãy nhớ lại mục tiêu cuối cùng trong con đường cách mạng mà Hồ Chí Minh đã lựa chọn cho dân tộc Việt Nam.",
            imageUrl: null
        },
        {
            questionNumber: 2,
            question: "Phan Bội Châu và Hồ Chí Minh đều có quan điểm về việc sử dụng bạo lực cách mạng. Tuy nhiên, điểm khác biệt trong quan điểm này là gì?",
            answerOptions: [
                {
                    text: "Phan Bội Châu tin vào bạo động từ nước ngoài, trong khi Hồ Chí Minh chủ trương bạo lực của toàn dân.",
                    rationale: "Hồ Chí Minh đã phát triển lý luận chiến tranh nhân dân, dựa vào sức mạnh của toàn dân tộc để tiến hành cách mạng, khác với việc chỉ trông chờ vào bạo động từ bên ngoài.",
                    isCorrect: true
                },
                {
                    text: "Phan Bội Châu ủng hộ bạo động, còn Hồ Chí Minh chỉ ủng hộ đấu tranh hòa bình.",
                    rationale: "Đây là một nhận định sai, Hồ Chí Minh đã chỉ ra rằng bạo lực cách mạng là cần thiết khi kẻ thù không chịu từ bỏ ý định xâm lược.",
                    isCorrect: false
                },
                {
                    text: "Cả hai đều cùng quan điểm về bạo lực cách mạng.",
                    rationale: "Mặc dù đều ủng hộ bạo lực, nhưng phương thức và đối tượng bạo lực của hai người có sự khác biệt rõ rệt.",
                    isCorrect: false
                },
                {
                    text: "Hồ Chí Minh ủng hộ bạo lực cá nhân, trong khi Phan Bội Châu ủng hộ bạo lực quần chúng.",
                    rationale: "Đây là nhận định ngược lại với thực tế. Hồ Chí Minh đã xây dựng lý luận về bạo lực cách mạng dựa trên sức mạnh của quần chúng nhân dân.",
                    isCorrect: false
                }
            ],
            hint: "Hãy so sánh nguồn gốc sức mạnh mà hai nhà yêu nước này đặt niềm tin để giành độc lập.",
            imageUrl: null
        },
        {
            questionNumber: 3,
            question: "Tư tưởng 'Độc lập cho dân tộc Việt Nam' của Hồ Chí Minh đã kế thừa những giá trị nào từ các nhà yêu nước tiền bối?",
            answerOptions: [
                {
                    text: "Chủ trương 'dựa vào ngoại bang' để đánh đuổi thực dân Pháp.",
                    rationale: "Hồ Chí Minh đã phê phán và từ bỏ con đường này vì nó mang tính phụ thuộc và không thể đi đến độc lập thực sự.",
                    isCorrect: false
                },
                {
                    text: "Quan niệm 'khai dân trí, chấn dân khí, hậu dân sinh' của Phan Châu Trinh.",
                    rationale: "Đây là một phần trong tư tưởng của Phan Châu Trinh, nhưng chưa phải là giá trị cốt lõi mà Hồ Chí Minh kế thừa để giải phóng dân tộc.",
                    isCorrect: false
                },
                {
                    text: "Lòng yêu nước, ý chí đấu tranh giành độc lập và tinh thần 'đoàn kết dân tộc'.",
                    rationale: "Hồ Chí Minh đã kế thừa và phát triển tinh thần yêu nước, ý chí đấu tranh kiên cường của các thế hệ trước để tạo nên sức mạnh tổng hợp cho cách mạng.",
                    isCorrect: true
                },
                {
                    text: "Lý thuyết 'bất bạo động' và đấu tranh hòa bình với Pháp.",
                    rationale: "Đây không phải là giá trị mà Hồ Chí Minh kế thừa, vì ông đã khẳng định bạo lực cách mạng là một tất yếu.",
                    isCorrect: false
                }
            ],
            hint: "Tìm kiếm những điểm chung trong tinh thần và mục tiêu mà Hồ Chí Minh và các tiền nhân đều hướng tới.",
            imageUrl: null
        },
        {
            questionNumber: 4,
            question: "Sự sáng tạo của Hồ Chí Minh trong con đường cứu nước thể hiện ở việc ông đã tìm thấy con đường nào?",
            answerOptions: [
                {
                    text: "Con đường bạo động cách mạng dựa vào sự hỗ trợ của các nước châu Á.",
                    rationale: "Đây là con đường của Phan Bội Châu, không phải là con đường sáng tạo của Hồ Chí Minh.",
                    isCorrect: false
                },
                {
                    text: "Con đường cải cách xã hội, văn hóa theo mô hình phương Tây.",
                    rationale: "Đây là con đường của Phan Châu Trinh, không phải là con đường của Hồ Chí Minh.",
                    isCorrect: false
                },
                {
                    text: "Con đường ngoại giao hòa bình, đàm phán với thực dân Pháp.",
                    rationale: "Mặc dù Hồ Chí Minh có sử dụng ngoại giao, nhưng đó không phải là con đường chủ yếu để giành độc lập.",
                    isCorrect: false
                },
                {
                    text: "Con đường cách mạng vô sản, kết hợp độc lập dân tộc với chủ nghĩa xã hội.",
                    rationale: "Đây là điểm sáng tạo lớn nhất của Hồ Chí Minh, đi theo con đường cách mạng vô sản của Lênin, hoàn toàn khác với các con đường trước đó.",
                    isCorrect: true
                }
            ],
            hint: "Hãy nghĩ về sự kiện lịch sử quan trọng đánh dấu bước ngoặt trong hành trình tìm đường cứu nước của Nguyễn Ái Quốc.",
            imageUrl: null
        },
        {
            questionNumber: 5,
            question: "Vì sao tư tưởng độc lập dân tộc của Hồ Chí Minh được đánh giá là mang giá trị thời đại?",
            answerOptions: [

                {
                    text: "Vì nó chỉ tập trung vào giải quyết mâu thuẫn dân tộc.",
                    rationale: "Đây là tư tưởng của các sĩ phu yêu nước tiền bối, Hồ Chí Minh đã nâng tầm lên thành mâu thuẫn dân tộc và thời đại.",
                    isCorrect: false
                },
                {
                    text: "Vì nó là sự kết hợp nhuần nhuyễn giữa dân tộc và thời đại, phù hợp với xu thế phát triển của thế giới.",
                    rationale: "Tư tưởng của Hồ Chí Minh đã giải quyết được mâu thuẫn giữa độc lập dân tộc và giải phóng giai cấp, phù hợp với trào lưu cách mạng thế giới lúc bấy giờ.",
                    isCorrect: true
                },
                {
                    text: "Vì nó chỉ phù hợp với bối cảnh Việt Nam, không có ý nghĩa toàn cầu.",
                    rationale: "Tư tưởng của Hồ Chí Minh đã có ảnh hưởng lớn đến phong trào giải phóng dân tộc trên thế giới, đặc biệt là ở châu Á, châu Phi và Mỹ Latinh.",
                    isCorrect: false
                },
                {
                    text: "Vì nó chỉ là sự sao chép từ các học thuyết của phương Tây.",
                    rationale: "Tư tưởng của Hồ Chí Minh là sự vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam.",
                    isCorrect: false
                }
            ],
            hint: "Tư tưởng của Người không chỉ giải quyết vấn đề của Việt Nam mà còn là ngọn đuốc soi đường cho nhiều dân tộc khác.",
            imageUrl: null
        },
        {
            questionNumber: 6,
            question: "Điểm khác biệt trong cách tiếp cận độc lập của Hồ Chí Minh so với Phan Châu Trinh là gì?",
            answerOptions: [
                {
                    text: "Phan Châu Trinh đề cao cải cách, trong khi Hồ Chí Minh chủ trương phải làm cách mạng để giành độc lập.",
                    rationale: "Trong khi Phan Châu Trinh tin vào việc thay đổi xã hội từ bên trong thông qua cải cách, Hồ Chí Minh đã nhận ra rằng cần phải tiến hành cách mạng toàn diện để xóa bỏ chế độ thuộc địa.",
                    isCorrect: true
                },
                {
                    text: "Phan Châu Trinh dựa vào sự giúp đỡ của Pháp, còn Hồ Chí Minh dựa vào Nhật Bản.",
                    rationale: "Đây là một nhận định sai. Cả hai đều không dựa vào Nhật Bản. Phan Châu Trinh tin vào sự 'khai hóa' của Pháp, còn Hồ Chí Minh dựa vào sức mạnh của toàn dân.",
                    isCorrect: false
                },
                {
                    text: "Cả hai đều cùng có quan điểm về con đường cải cách.",
                    rationale: "Mặc dù Hồ Chí Minh cũng quan tâm đến việc cải cách, nhưng đó không phải là con đường chính để giành độc lập, khác hoàn toàn với Phan Châu Trinh.",
                    isCorrect: false
                },
                {
                    text: "Hồ Chí Minh chỉ tập trung vào giải phóng miền Nam, còn Phan Châu Trinh giải phóng cả nước.",
                    rationale: "Đây là nhận định sai về phạm vi đấu tranh của hai người.",
                    isCorrect: false
                }
            ],
            hint: "Hãy xem xét hai con đường 'cách mạng' và 'cải cách' mà hai người đã lựa chọn.",
            imageUrl: null
        },
        {
            questionNumber: 7,
            question: "Hồ Chí Minh đã phê phán quan điểm 'dựa vào ngoại bang' của Phan Bội Châu vì lý do gì?",
            answerOptions: [

                {
                    text: "Vì các nước ngoại bang đó quá yếu để giúp đỡ Việt Nam.",
                    rationale: "Hồ Chí Minh không phê phán về sức mạnh của các nước ngoại bang mà là về bản chất của con đường đó.",
                    isCorrect: false
                },
                {
                    text: "Vì Người không tin vào bất kỳ một thế lực nào trên thế giới.",
                    rationale: "Mặc dù Hồ Chí Minh chủ trương tự lực cánh sinh, nhưng ông vẫn tìm kiếm sự ủng hộ của các lực lượng tiến bộ trên thế giới.",
                    isCorrect: false
                },
                {
                    text: "Vì Người cho rằng 'dựa vào ngoại bang' sẽ không thể giành được độc lập thực sự mà chỉ thay đổi chủ nhân.",
                    rationale: "Đây là lý do cốt lõi mà Hồ Chí Minh đã phê phán con đường 'dựa vào ngoại bang', khẳng định rằng độc lập phải do chính dân tộc Việt Nam giành lấy.",
                    isCorrect: true
                },
                {
                    text: "Vì Phan Bội Châu đã thất bại trong con đường này.",
                    rationale: "Sự thất bại của Phan Bội Châu là một hệ quả, không phải là lý do chính mà Hồ Chí Minh phê phán con đường đó.",
                    isCorrect: false
                }
            ],
            hint: "Hãy nhớ lại câu nói nổi tiếng của Người về 'tự lực cánh sinh'.",
            imageUrl: null
        },
        {
            questionNumber: 8,
            question: "Sự khác biệt trong việc xác định đối tượng của cách mạng của Hồ Chí Minh so với các nhà yêu nước tiền bối là gì?",
            answerOptions: [

                {
                    text: "Hồ Chí Minh coi kẻ thù là toàn bộ thế giới phương Tây, còn các tiền nhân chỉ coi Pháp là kẻ thù.",
                    rationale: "Đây là nhận định sai. Hồ Chí Minh coi thực dân Pháp là kẻ thù chính, nhưng không phải là toàn bộ thế giới phương Tây.",
                    isCorrect: false
                },
                {
                    text: "Hồ Chí Minh coi kẻ thù là tầng lớp trí thức, trong khi các tiền nhân coi là tầng lớp nông dân.",
                    rationale: "Đây là nhận định sai. Cả hai đều không coi tầng lớp trí thức và nông dân là kẻ thù.",
                    isCorrect: false
                },
                {
                    text: "Cả hai đều cùng xác định kẻ thù duy nhất là thực dân Pháp.",
                    rationale: "Quan điểm này chỉ đúng với các nhà yêu nước tiền bối, Hồ Chí Minh đã xác định thêm kẻ thù thứ hai là phong kiến tay sai.",
                    isCorrect: false
                },
                {
                    text: "Hồ Chí Minh xác định kẻ thù là thực dân Pháp và phong kiến tay sai, trong khi các tiền nhân chỉ coi thực dân Pháp là kẻ thù.",
                    rationale: "Hồ Chí Minh đã chỉ rõ hai mâu thuẫn cơ bản của xã hội thuộc địa: mâu thuẫn giữa dân tộc Việt Nam với thực dân Pháp và mâu thuẫn giữa nông dân với địa chủ phong kiến.",
                    isCorrect: true
                }
            ],
            hint: "Hãy xem xét các mâu thuẫn trong xã hội Việt Nam thời bấy giờ mà Hồ Chí Minh đã chỉ ra.",
            imageUrl: null
        },
        {
            questionNumber: 9,
            question: "Đặc điểm sáng tạo trong việc xác định lực lượng cách mạng của Hồ Chí Minh là gì?",
            answerOptions: [
                {
                    text: "Xây dựng khối đại đoàn kết toàn dân tộc, nòng cốt là liên minh công - nông.",
                    rationale: "Hồ Chí Minh đã nhận thấy sức mạnh của toàn dân tộc và xác định liên minh công - nông là lực lượng nòng cốt, điều mà các nhà yêu nước tiền bối chưa làm được.",
                    isCorrect: true
                },
                {
                    text: "Chỉ dựa vào tầng lớp trí thức và sĩ phu yêu nước.",
                    rationale: "Đây là lực lượng nòng cốt trong các phong trào yêu nước trước đó, nhưng Hồ Chí Minh đã mở rộng ra toàn dân.",
                    isCorrect: false
                },
                {
                    text: "Chỉ dựa vào sự giúp đỡ của các nước đồng minh.",
                    rationale: "Đây là quan điểm của một số nhà yêu nước, không phải là tư tưởng của Hồ Chí Minh về lực lượng cách mạng.",
                    isCorrect: false
                },
                {
                    text: "Xây dựng lực lượng từ các dân tộc thiểu số.",
                    rationale: "Mặc dù Hồ Chí Minh rất quan tâm đến các dân tộc thiểu số, nhưng đó không phải là lực lượng nòng cốt duy nhất.",
                    isCorrect: false
                }
            ],
            hint: "Hãy nhớ lại lực lượng nào đã được Hồ Chí Minh kêu gọi và tập hợp để làm nên thành công của Cách mạng tháng Tám.",
            imageUrl: null
        },
        {
            questionNumber: 10,
            question: "Sự khác biệt lớn nhất về kết quả mà tư tưởng của Hồ Chí Minh đạt được so với các phong trào trước đó là gì?",
            answerOptions: [
                {
                    text: "Chỉ dừng lại ở việc tạo ra các cuộc nổi dậy tự phát, không có hệ thống.",
                    rationale: "Đây là kết quả của các phong trào yêu nước trước đó, không phải là kết quả của cách mạng theo tư tưởng Hồ Chí Minh.",
                    isCorrect: false
                },
                {
                    text: "Chỉ có thể giành thắng lợi ở một số địa phương.",
                    rationale: "Đây là nhận định sai, cách mạng tháng Tám đã thành công trên phạm vi cả nước.",
                    isCorrect: false
                },
                {
                    text: "Giải phóng dân tộc thành công và xây dựng được Nhà nước Dân chủ Cộng hòa đầu tiên ở Đông Nam Á.",
                    rationale: "Đây là kết quả cụ thể, rõ ràng nhất, đánh dấu sự thành công của con đường cách mạng mà Hồ Chí Minh đã lựa chọn.",
                    isCorrect: true
                },
                {
                    text: "Dẫn đến việc Việt Nam vẫn là một thuộc địa của Pháp.",
                    rationale: "Đây là một nhận định sai và ngược lại với thực tế lịch sử.",
                    isCorrect: false
                }
            ],
            hint: "Tư tưởng của Người đã đưa Việt Nam đến một cuộc cách mạng thành công vào năm 1945.",
            imageUrl: null
        }
    ]
};

const QuizGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const totalQuestions = quizData.questions.length;
    const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;
    const selectedAnswerIndex = userAnswers[currentQuestionIndex];

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#202020' : '#f0f0f0';
    }, [isDarkMode]);

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

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const getStyles = (element) => {
        const baseStyles = {
            quizContainer: {
                fontFamily: `'Google Sans Flex', 'Google Sans', 'Helvetica Neue', sans-serif`,
                maxWidth: '1000px',
                margin: '20px auto',
                borderRadius: '24px',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                backgroundColor: isDarkMode ? '#242424' : '#fff',
                color: isDarkMode ? '#f0f0f0' : '#333',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '70vh',
            },
            header: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                borderBottom: `1px solid ${isDarkMode ? '#383838' : '#e0e0e0'}`,
            },
            title: {
                fontSize: '1em',
                fontWeight: 'bold',
                color: isDarkMode ? '#ddd' : '#333',
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
                backgroundColor: isDarkMode ? '#444' : '#e0e0e0',
                borderRadius: '2px',
                overflow: 'hidden',
            },
            progressBar: {
                height: '100%',
                width: `${progressPercentage}%`,
                backgroundColor: '#6b6bff',
                transition: 'width 0.5s ease-in-out',
            },
            questionCount: {
                fontSize: '0.9em',
                color: isDarkMode ? '#aaa' : '#777',
            },
            controlButton: {
                background: 'none',
                border: 'none',
                color: isDarkMode ? '#aaa' : '#888',
                fontSize: '1.5em',
                cursor: 'pointer',
                lineHeight: '1',
            },
            mainContent: {
                padding: '32px 64px',
                flexGrow: '1',
            },
            questionText: {
                fontSize: '1.75em',
                fontWeight: '400',
                lineHeight: '1.5',
                marginBottom: '40px',
                color: isDarkMode ? '#f0f0f0' : '#333',
                textAlign: 'left',
            },
            answerSection: {
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '40px',
            },
            answerBox: {
                padding: '16px 20px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: selectedAnswerIndex !== undefined ? 'not-allowed' : 'pointer',
                backgroundColor: isDarkMode ? '#2e2e2e' : '#f5f5f5',
                border: `1px solid ${isDarkMode ? '#383838' : '#e0e0e0'}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                textAlign: 'start',
            },
            answerBoxHover: {
                backgroundColor: isDarkMode ? '#333' : '#eee',
            },
            answerBoxCorrect: {
                border: '1px solid #00c853',
                backgroundColor: isDarkMode ? '#1a3a2d' : '#d4f6e6',
            },
            answerBoxIncorrect: {
                border: '1px solid #e53935',
                backgroundColor: isDarkMode ? '#432626' : '#fddbdc',
            },
            answerBoxFaded: {
                opacity: 0.6,
            },
            answerText: {
                fontSize: '1em',
                fontWeight: 'normal',
                color: isDarkMode ? '#e0e0e0' : '#333',
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
                color: '#00c853',
            },
            incorrectStatusText: {
                color: '#e53935',
            },
            rationaleText: {
                fontSize: '0.9em',
                lineHeight: '1.4',
                color: isDarkMode ? '#aaa' : '#555',
                margin: '0',
            },
            bottomSection: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                borderTop: `1px solid ${isDarkMode ? '#383838' : '#e0e0e0'}`,
                fontSize: '0.85em',
                color: isDarkMode ? '#aaa' : '#777',
            },
            hintButton: {
                background: 'none',
                border: 'none',
                color: isDarkMode ? '#aaa' : '#777',
                cursor: 'pointer',
                fontSize: '1em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            },
            hintText: {
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: isDarkMode ? '#333' : '#fffbe6',
                border: `1px solid ${isDarkMode ? '#555' : '#ffe58f'}`,
                color: isDarkMode ? '#e0e0e0' : '#664d03',
                marginBottom: '16px',
                fontSize: '1em',
            },
            nextButton: {
                padding: '12px 28px',
                borderRadius: '20px',
                border: 'none',
                background: '#1a73e8',
                color: 'white',
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
                padding: '40px 64px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                textAlign: 'center',
            },
            resultTitle: {
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: isDarkMode ? '#f0f0f0' : '#333',
                marginBottom: '10px',
                textAlign: 'left'
            },
            resultSubtitle: {
                fontSize: '1.2em',
                color: isDarkMode ? '#aaa' : '#666',
                marginBottom: '40px',
                textAlign: 'left'
            },
            statsGrid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                width: '100%',
                marginBottom: '40px',
            },
            statCard: {
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: isDarkMode ? '#2e2e2e' : '#f5f5f5',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                textAlign: 'left',
            },
            statTitle: {
                fontSize: '0.9em',
                color: isDarkMode ? '#aaa' : '#555',
                marginBottom: '8px',
            },
            statTitle2: {
                fontSize: '0.95em',
                color: isDarkMode ? '#f5f5f5' : '#555',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold'
            },
            statValue: {
                fontSize: '2em',
                fontWeight: 'bold',
                color: isDarkMode ? '#e0e0e0' : '#000',
            },
            statSubtitle: {
                fontSize: '1em',
                color: isDarkMode ? '#aaa' : '#555',
            },
            feedbackCard: {
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
                border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginBottom: '40px',
                textAlign: 'left'
            },
            feedbackIcon: {
                fontSize: '3em',
                color: isDarkMode ? '#6b6bff' : '#007bff',
            },
            feedbackText: {
                flexGrow: 1,
            },
            feedbackTitle: {
                fontSize: '1.2em',
                fontWeight: 'bold',
                marginBottom: '8px',
            },
            feedbackButton: {
                padding: '12px 24px',
                borderRadius: '20px',
                background: '#1a73e8',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
            },
            continueLearning: {
                fontSize: '1.5em',
                fontWeight: 'bold',
                marginBottom: '24px',
                textAlign: 'left'
            },
            learningGrid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                width: '100%',
            },
            learningCard: {
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: isDarkMode ? '#2e2e2e' : '#f5f5f5',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                textAlign: 'left',
                position: 'relative',
            },
            learningIcon: {
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '2em',
                color: isDarkMode ? '#aaa' : '#777',
            },
            learningTitle: {
                fontSize: '1.1em',
                fontWeight: 'bold',
                marginBottom: '8px',
            },
            learningDescription: {
                fontSize: '0.9em',
                color: isDarkMode ? '#aaa' : '#555',
                lineHeight: '1.4',
            },
            actionButtons: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px',
                marginTop: '40px',
                width: '100%'
            },
            backButton: {
                background: 'none',
                border: 'none',
                color: isDarkMode ? '#e0e0e0' : '#333',
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
                    <button style={getStyles('controlButton')} onClick={toggleDarkMode}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
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
                    <div style={getStyles('feedbackCard')}>
                        <span style={getStyles('feedbackIcon')}>&#9733;</span>
                        <div style={getStyles('feedbackText')}>
                            <div style={getStyles('feedbackTitle')}>Ưu điểm và lĩnh vực cần cải thiện</div>
                            <p style={getStyles('learningDescription')}>
                                Xem bản tóm tắt về những ưu điểm chính của bạn và khám phá những lĩnh vực bạn có thể tập trung học tập.
                            </p>
                        </div>
                        <button style={getStyles('feedbackButton')}>Phân tích hiệu quả học tập của tôi</button>
                    </div>

                    <h2 style={getStyles('continueLearning')}>Tiếp tục tìm hiểu</h2>
                    <div style={getStyles('learningGrid')}>
                        <div style={getStyles('learningCard')}>
                            <span style={getStyles('learningIcon')}>&#9734;</span>
                            <div style={getStyles('learningTitle')}>Thẻ ghi nhớ</div>
                            <p style={getStyles('learningDescription')}>
                                Tạo bộ thẻ ghi nhớ hoàn chỉnh từ tất cả tài liệu kiểm tra của bạn. Phù hợp để bạn ôn tập nhanh và nắm vững các khái niệm chính.
                            </p>
                        </div>
                        <div style={getStyles('learningCard')}>
                            <span style={getStyles('learningIcon')}>&#128218;</span>
                            <div style={getStyles('learningTitle')}>Hướng dẫn học tập</div>
                            <p style={getStyles('learningDescription')}>
                                Tạo hướng dẫn học tập toàn diện dựa trên tài liệu bạn đang học. Phù hợp để bạn ôn tập chuyên sâu.
                            </p>
                        </div>
                    </div>
                    <div style={getStyles('actionButtons')}>
                        <button onClick={handleReviewQuiz} style={{ ...getStyles('nextButton'), background: 'none', color: isDarkMode ? '#e0e0e0' : '#333' }}>
                            Xem lại bài kiểm tra
                        </button>
                        <button style={getStyles('nextButton')} onClick={handlePlayAgain}>
                            Câu hỏi khác
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
                                        color: isDarkMode ? '#e0e0e0' : '#333'
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