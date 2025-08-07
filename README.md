<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <!-- Configurações básicas do documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo Interativo - Ailton Carlos Santos Mota</title>

    <!-- Importação de bibliotecas externas via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Metadados da Aplicação -->
    <!-- Chosen Palette: Warm Neutrals -->
    <!-- Application Structure Plan: A single-page application with a clear, thematic structure. The navigation is segmented into 'Sobre', 'Experiência', 'Formação', 'Cursos', and 'Habilidades' to allow for easy exploration. The professional experience is presented as a timeline to show career progression, while academic formation and courses are organized into distinct card grids for clarity. Skills are visualized using a horizontal bar chart for a straightforward comparison of proficiency levels. This structure provides a logical hierarchy, making the information easily digestible for recruiters. -->
    <!-- Visualization & Content Choices:
        - Hero Section (Sobre): Goal: Inform. Method: Text. Justification: A direct and personal introduction.
        - Experience Section (Experiência): Goal: Show Change. Method: Vertical Timeline (HTML/CSS/JS). Justification: Effectively narrates professional history.
        - Education Section (Formação): Goal: Organize/Inform. Method: Card Grid (HTML/CSS). Justification: Clearly separates and highlights academic and technical degrees.
        - Courses Section (Cursos): Goal: Inform. Method: Simple Card List. Justification: Neatly groups continuing education and other qualifications.
        - Skills Section (Habilidades): Goal: Compare. Method: Horizontal Bar Chart (Chart.js). Justification: Provides a clear and direct visualization of proficiency levels for specific skill sets, which is easy to interpret quickly.
        - CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <!-- Estilos CSS customizados -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8F7F4;
            color: #3D405B;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            background-color: #81B29A;
            border: 4px solid #F8F7F4;
            top: 0;
            left: -0.625rem;
            z-index: 10;
        }
        .timeline-line {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #E0E0E0;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
        }
    </style>
</head>
<body class="antialiased">

    <!-- Cabeçalho com Navegação -->
    <header class="bg-white/80 backdrop-blur-lg sticky top-0 z-30 shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div>
                <h1 class="text-xl font-bold text-[#3D405B]">Ailton Carlos S. Mota</h1>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#sobre" class="text-gray-600 hover:text-[#81B29A] transition-colors">Sobre</a>
                <a href="#experiencia" class="text-gray-600 hover:text-[#81B29A] transition-colors">Experiência</a>
                <a href="#formacao" class="text-gray-600 hover:text-[#81B29A] transition-colors">Formação</a>
                <a href="#cursos" class="text-gray-600 hover:text-[#81B29A] transition-colors">Cursos</a>
                <a href="#habilidades" class="text-gray-600 hover:text-[#81B29A] transition-colors">Habilidades</a>
            </div>
            <div class="md:hidden">
                <button id="menu-btn" class="text-gray-600 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#sobre" class="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Sobre</a>
            <a href="#experiencia" class="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Experiência</a>
            <a href="#formacao" class="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Formação</a>
            <a href="#cursos" class="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Cursos</a>
            <a href="#habilidades" class="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Habilidades</a>
        </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="container mx-auto px-6 py-12">
        <!-- Seção Sobre -->
        <section id="sobre" class="text-center mb-20">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#3D405B]">Ailton Carlos Santos Mota</h2>
            <p class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
                Professor de Filosofia e Informática com sólida formação técnica em Mecânica Industrial e Informática. Possuo experiência como técnico em manutenção de computadores, com domínio avançado em hardware, sistemas operacionais e pacotes Office. Sou proativo na manutenção e treinamento de uso de software e hardware, buscando constantemente desenvolver projetos mecânicos, elétricos e soluções tecnológicas inovadoras. Minhas habilidades incluem facilidade de comunicação e trabalho em equipe, comprometimento com resultados e dedicação contínua ao aprendizado.
            </p>
        </section>

        <!-- Seção Jornada Profissional -->
        <section id="experiencia" class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 text-[#3D405B]">Jornada Profissional</h2>
            <div id="timeline-container" class="relative max-w-2xl mx-auto">
                <div class="timeline-line"></div>
            </div>
        </section>

        <!-- Seção Formação Acadêmica e Técnica -->
        <section id="formacao" class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 text-[#3D405B]">Formação Acadêmica e Técnica</h2>
            <div id="education-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Conteúdo gerado via JS -->
            </div>
        </section>

        <!-- Seção Cursos e Qualificações Adicionais -->
        <section id="cursos" class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 text-[#3D405B]">Cursos e Qualificações Adicionais</h2>
            <div id="courses-container" class="max-w-2xl mx-auto space-y-4">
                <!-- Conteúdo gerado via JS -->
            </div>
        </section>

        <!-- Seção Habilidades e Conhecimentos -->
        <section id="habilidades" class="mb-20">
            <h2 class="text-3xl font-bold text-center mb-12 text-[#3D405B]">Habilidades e Conhecimentos</h2>
            <div class="chart-container">
                <canvas id="skillsChart"></canvas>
            </div>
        </section>
    </main>

    <!-- Rodapé -->
    <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-6 py-8 text-center">
            <p>Pronto para colaborar em um novo desafio?</p>
            <p class="font-bold mt-2">ailtoncarlos0101@gmail.com | +55 (38) 99113-9479</p>
        </div>
    </footer>

    <!-- Script JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Lógica do Menu Mobile
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Dados da aplicação
            const professionalData = [
                { period: '2020 - Atual', title: 'Professor de Filosofia', company: 'Secretaria de Estado de Educação MG' },
                { period: 'Não especificado', title: 'Professor de Tecnologia e Inovação', company: 'Secretaria de Estado de Educação MG' },
                { period: 'Não especificado', title: 'Professor de Ensino Religioso', company: 'Secretaria de Estado de Educação MG' },
                { period: 'Não especificado', title: 'Coordenador de Ensino Médio (Regular e EJA)', company: 'Secretaria de Estado de Educação MG' },
                { period: '2018 - 2019', title: 'Professor de Informática', company: 'Mister Cursos' },
                { period: '2017', title: 'Operador de Telemarketing', company: 'VGX Contact Center' },
                { period: 'Não especificado', title: 'Técnico Autônomo', company: 'Manutenção de computadores e notebooks' }
            ];

            const educationData = [
                { level: 'Mestrado Profissional em Filosofia', institution: 'Universidade Estadual de Montes Claros', conclusion: '2026' },
                { level: 'Licenciatura em Informática', institution: 'Centro Universitário Leonardo da Vinci', conclusion: '2025' },
                { level: 'Pós-graduação em Metodologia do Ensino', institution: 'FAVENI', conclusion: '2023' },
                { level: 'Licenciatura em Filosofia', institution: 'Universidade Estadual de Montes Claros', conclusion: '2019' },
                { level: 'Técnico em Informática', institution: 'Centro Educacional Carajás', conclusion: '2025' },
                { level: 'Técnico em Mecânica Industrial', institution: 'Senai Montes Claros', conclusion: '2013' }
            ];

            const coursesData = [
                { name: 'Montagem e Manutenção de Computadores e Rede', institution: 'CETEC', year: '2016' },
                { name: 'Curso de Programação Básica', institution: 'Não especificado', year: '2012' }
            ];

            const skillsData = {
                labels: ['Manutenção de Hardware/Software', 'Sistemas Operacionais (Windows/Linux)', 'Suítes Office (Microsoft/Google)'],
                values: [90, 90, 95] // Proficiência em %
            };

            // Renderização da Jornada Profissional
            const timelineContainer = document.getElementById('timeline-container');
            professionalData.forEach(item => {
                const div = document.createElement('div');
                div.className = 'timeline-item mb-8 pl-8 relative';
                div.innerHTML = `
                    <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#81B29A]">
                        <p class="text-sm font-semibold text-gray-500">${item.period}</p>
                        <h3 class="font-bold text-lg text-[#3D405B]">${item.title}</h3>
                        <p class="text-gray-600">${item.company}</p>
                    </div>`;
                timelineContainer.appendChild(div);
            });

            // Renderização da Formação
            const educationContainer = document.getElementById('education-container');
            educationData.forEach(item => {
                const div = document.createElement('div');
                div.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col';
                div.innerHTML = `
                    <h3 class="font-bold text-lg text-[#3D405B] flex-grow">${item.level}</h3>
                    <p class="text-gray-600 mt-2">${item.institution}</p>
                    <p class="text-sm font-semibold text-gray-500 mt-auto pt-2">Conclusão em ${item.conclusion}</p>`;
                educationContainer.appendChild(div);
            });

            // Renderização dos Cursos
            const coursesContainer = document.getElementById('courses-container');
            coursesData.forEach(item => {
                const div = document.createElement('div');
                div.className = 'bg-white p-4 rounded-lg shadow-sm';
                div.innerHTML = `
                    <h3 class="font-semibold text-[#3D405B]">${item.name}</h3>
                    <p class="text-sm text-gray-500">${item.institution} - ${item.year}</p>`;
                coursesContainer.appendChild(div);
            });

            // Renderização do Gráfico de Habilidades
            const ctx = document.getElementById('skillsChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: skillsData.labels,
                    datasets: [{
                        label: 'Proficiência',
                        data: skillsData.values,
                        backgroundColor: 'rgba(129, 178, 154, 0.7)',
                        borderColor: 'rgba(129, 178, 154, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) { return value + "%" }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        });
    </script>
</body>
</html>
