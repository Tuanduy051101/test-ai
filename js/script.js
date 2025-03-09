// Dữ liệu các công cụ AI
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        description: "Trợ lý AI đa năng giúp trả lời câu hỏi, viết bài, giải thích khái niệm phức tạp và hỗ trợ học tập.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        categories: ["writing", "research", "language", "programming"],
        url: "https://chat.openai.com/"
    },
    {
        id: 2,
        name: "Grammarly",
        description: "Công cụ kiểm tra ngữ pháp và chính tả sử dụng AI để cải thiện kỹ năng viết.",
        image: "https://cdn.prod.website-files.com/605dd4e52b25d35391c43725/64738ba877020dbeb73fb5ad_644e4b039c872640ca89a054_grammarly-1.svg",
        categories: ["writing", "language"],
        url: "https://www.grammarly.com/"
    },
    {
        id: 3,
        name: "Wolfram Alpha",
        description: "Công cụ tính toán và trả lời câu hỏi dựa trên kiến thức, đặc biệt mạnh về toán học và khoa học.",
        image: "https://play-lh.googleusercontent.com/OceHg5bH7EsTRwl-lD7jjV9WM0mpj0oH4YfA-CSbjvfa7NCLQBu5-4cLwNlDvCUp5Q4",
        categories: ["math", "research"],
        url: "https://www.wolframalpha.com/"
    },
    {
        id: 4,
        name: "Duolingo",
        description: "Ứng dụng học ngôn ngữ sử dụng AI để cá nhân hóa trải nghiệm học tập.",
        image: "https://play-lh.googleusercontent.com/DsyWoouXk7psjF7DCG6MJj_rX9RR9-liQskZXoKvcqQIu_ybUm4F5RntxWh1IZAVSLI",
        categories: ["language"],
        url: "https://www.duolingo.com/"
    },
    {
        id: 5,
        name: "Quillbot",
        description: "Công cụ viết lại văn bản sử dụng AI giúp cải thiện và đa dạng hóa cách diễn đạt.",
        image: "https://pwq.nmb.mybluehost.me/wp-content/uploads/2023/09/quillbot-logo-no-bg.png",
        categories: ["writing", "language"],
        url: "https://quillbot.com/"
    },
    {
        id: 6,
        name: "GitHub Copilot",
        description: "Trợ lý lập trình AI giúp gợi ý mã và hoàn thành code khi bạn đang viết.",
        image: "https://www.it-labs.com/wp-content/uploads/2023/05/GitHub-Copilot-logo-1040x650-1.png",
        categories: ["programming"],
        url: "https://github.com/features/copilot"
    },
    {
        id: 7,
        name: "Photomath",
        description: "Ứng dụng giải toán bằng cách chụp ảnh bài toán và cung cấp giải thích chi tiết.",
        image: "https://androidcure.com/wp-content/uploads/2015/11/PhotoMath-1.png",
        categories: ["math"],
        url: "https://photomath.com/"
    },
    {
        id: 8,
        name: "Elicit",
        description: "Trợ lý nghiên cứu AI giúp tìm kiếm và tổng hợp các bài báo khoa học.",
        image: "https://cdn.dribbble.com/userupload/12865432/file/original-be08451da3c30fe7c4cc3cf0745d2dc5.jpg",
        categories: ["research"],
        url: "https://elicit.org/"
    },
    {
        id: 9,
        name: "Notion AI",
        description: "Tích hợp AI vào Notion giúp viết, tóm tắt và tổ chức thông tin hiệu quả hơn.",
        image: "https://cdn.prod.website-files.com/64a30b704b78b8d713bcdb90/64de987fd436170288f90e0d_How%20to%20Use%20Notion%20AI.png",
        categories: ["writing", "research"],
        url: "https://www.notion.so/product/ai"
    },
    {
        id: 10,
        name: "Mathway",
        description: "Công cụ giải quyết các bài toán từ đại số cơ bản đến giải tích nâng cao.",
        image: "https://cdn-b.saashub.com/images/app/service_logos/14/36dcced40691/large.png?1535895612",
        categories: ["math"],
        url: "https://www.mathway.com/"
    },
    {
        id: 11,
        name: "DeepL",
        description: "Dịch vụ dịch thuật AI với độ chính xác cao, hỗ trợ nhiều ngôn ngữ.",
        image: "https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg",
        categories: ["language"],
        url: "https://www.deepl.com/"
    },
    {
        id: 12,
        name: "Replit",
        description: "Môi trường lập trình trực tuyến với tích hợp AI giúp viết và debug code.",
        image: "https://ai-learning-tools.com/wp-content/uploads/2024/02/Replit.png",
        categories: ["programming"],
        url: "https://replit.com/"
    }
];

// Hiển thị danh sách công cụ
function displayTools(tools) {
    const toolsGrid = document.querySelector('.tools-grid');
    toolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        const tags = tool.categories.map(category => 
            `<span class="tag">${getCategoryName(category)}</span>`
        ).join('');
        
        toolCard.innerHTML = `
            <img src="${tool.image}" alt="${tool.name}">
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="tool-tags">
                    ${tags}
                </div>
                <a href="${tool.url}" class="tool-link" target="_blank">Truy cập <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
}

// Chuyển đổi mã danh mục thành tên hiển thị
function getCategoryName(category) {
    const categoryNames = {
        'writing': 'Viết lách',
        'research': 'Nghiên cứu',
        'language': 'Ngôn ngữ',
        'math': 'Toán học',
        'programming': 'Lập trình'
    };
    
    return categoryNames[category] || category;
}

// Xử lý lọc công cụ theo danh mục
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cập nhật trạng thái active
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // Lọc công cụ
            if (category === 'all') {
                displayTools(aiTools);
            } else {
                const filteredTools = aiTools.filter(tool => 
                    tool.categories.includes(category)
                );
                displayTools(filteredTools);
            }
        });
    });
}

// Xử lý form liên hệ
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Trong thực tế, bạn sẽ gửi dữ liệu form đến server
        // Ở đây chúng ta chỉ hiển thị thông báo
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });
}

// Xử lý cuộn mượt khi click vào menu
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
}

// Khởi tạo trang web khi tải xong
document.addEventListener('DOMContentLoaded', () => {
    displayTools(aiTools);
    setupFilters();
    setupContactForm();
    setupSmoothScroll();
}); 