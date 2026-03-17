const zodiacSigns = [
            { name: 'Áries', symbol: '♈', aspect: 'Energia pioneira e coragem inabalável' },
            { name: 'Touro', symbol: '♉', aspect: 'Estabilidade e conexão com a natureza' },
            { name: 'Gêmeos', symbol: '♊', aspect: 'Versatilidade e comunicação fluida' },
            { name: 'Câncer', symbol: '♋', aspect: 'Intuição profunda e cuidado maternal' },
            { name: 'Leão', symbol: '♌', aspect: 'Criatividade radiante e liderança natural' },
            { name: 'Virgem', symbol: '♍', aspect: 'Precisão analítica e dedicação' },
            { name: 'Libra', symbol: '♎', aspect: 'Harmonia e senso estético refinado' },
            { name: 'Escorpião', symbol: '♏', aspect: 'Transformação e intensidade emocional' },
            { name: 'Sagitário', symbol: '♐', aspect: 'Expansão filosófica e aventura' },
            { name: 'Capricórnio', symbol: '♑', aspect: 'Ambição estruturada e sabedoria' },
            { name: 'Aquário', symbol: '♒', aspect: 'Inovação e consciência coletiva' },
            { name: 'Peixes', symbol: '♓', aspect: 'Compaixão infinita e conexão espiritual' }
        ];

        // Dados dos depoimentos
        const testimonials = [
            {
                name: 'Antônia',
                initial: 'A',
                service: 'Constelação Sistêmica',
                rating: 5,
                text: 'Procurei Gislaine, para que me auxiliasse uma questão que vinha me incomodando a um tempo. Na verdade queria realizar um sonho antigo, no qual teria que conciliar alguns pontos para se tornar viável. Com a ajuda da constelação sistémica e do baralho de repente tudo fluiu, e finalmente consegui realizar um sonho!!Gratidão Universo!! Gratidão Gislaine!!'
            },
            {
                name: 'Ricardo Santos',
                initial: 'R',
                service: 'Tarô',
                rating: 5,
                text: 'Incrível como as cartas conseguiram captar exatamente o momento que eu estava vivendo. As orientações foram precisas e me ajudaram a tomar uma decisão importante com mais confiança.'
            },
            {
                name: 'Juliana Oliveira',
                initial: 'J',
                service: 'Constelação Familiar',
                rating: 5,
                text: 'A constelação familiar foi transformadora! Consegui compreender dinâmicas familiares que me afetavam há anos. Saí da sessão com um sentimento de leveza e compreensão profunda.'
            },
            {
                name: 'Paulo Mendes',
                initial: 'P',
                service: 'Tarô',
                rating: 5,
                text: 'Profissional extremamente dedicada e empática. A consulta de tarô superou minhas expectativas. Recebi orientações valiosas que estão me ajudando a trilhar um novo caminho.'
            },
            {
                name: 'Camila Rodrigues',
                initial: 'C',
                service: 'Mapa Astral',
                rating: 5,
                text: 'Nunca havia feito uma leitura astrológica tão completa e detalhada. A forma como ela explicou cada aspecto do meu mapa foi esclarecedora. Recomendo muito!'
            },
            {
                name: 'Fernando Costa',
                initial: 'F',
                service: 'Constelação Familiar',
                rating: 5,
                text: 'Experiência profunda e libertadora. A constelação me permitiu ver questões familiares sob uma nova perspectiva. Gratidão imensa pelo trabalho sério e acolhedor!'
            }
        ];

        // Runas do Amor com mensagens
        const lovRunes = [
            { symbol: '❤️', name: 'Fehu', meaning: 'Abundância em amor e prosperidade sentimental chegando em sua vida.' },
            { symbol: '💫', name: 'Uruz', meaning: 'Força e poder para transformar sua vida amorosa e relacionamentos.' },
            { symbol: '🔥', name: 'Thurisaz', meaning: 'Proteção divina nos seus sentimentos e relacionamentos atuais.' },
            { symbol: '🎯', name: 'Ansuz', meaning: 'Comunicação clara e expressar seus sentimentos verdadeiros.' },
            { symbol: '✨', name: 'Raido', meaning: 'Jornada e movimento positivo em relacionamentos. Mudanças benéficas chegam.' },
            { symbol: '🌸', name: 'Kenaz', meaning: 'Luz do amor acendida, clareza sobre seus sentimentos verdadeiros.' },
            { symbol: '🎁', name: 'Gebo', meaning: 'Equilíbrio e troca harmoniosa em relacionamentos. Parcerias se fortalecem.' },
            { symbol: '😊', name: 'Wunjo', meaning: 'Alegria, felicidade e satisfação no amor chegando em seu caminho.' },
            { symbol: '🛡️', name: 'Hagalaz', meaning: 'Proteção durante transformações. Desafios passam, força permanece.' },
            { symbol: '❄️', name: 'Nauthiz', meaning: 'Necessidade genuína no coração. Confiança em seus verdadeiros desejos.' },
            { symbol: '☀️', name: 'Isa', meaning: 'Pausa reflexiva. Tempo de compreender seus sentimentos mais profundos.' },
            { symbol: '🌳', name: 'Jera', meaning: 'Colheita de amor. O que semear em amor, colherá em abundance.' },
            { symbol: '🚀', name: 'Eihwaz', meaning: 'Transformação espiritual. Amor que evolui e amadurece.' },
            { symbol: '🌊', name: 'Perthro', meaning: 'Mistério e destino. Confie no fluxo do amor em sua vida.' },
            { symbol: '🦅', name: 'Algiz', meaning: 'Proteção e elevação. Amor que te eleva espiritualmente.' },
            { symbol: '🌟', name: 'Sowilo', meaning: 'Sucesso e vitória no amor. Brilho e confiança em si mesmo.' },
            { symbol: '🎵', name: 'Tiwaz', meaning: 'Justiça e honestidade. Amor verdadeiro e sem enganos.' },
            { symbol: '🦌', name: 'Berkano', meaning: 'Crescimento e cuidado. Relacionamentos que florescevem com ternura.' },
            { symbol: '💎', name: 'Ehwaz', meaning: 'Harmonia e parceria. Alianças fortes baseadas em confiança mútua.' },
            { symbol: '🔮', name: 'Mannaz', meaning: 'Humanidade e conexão. Amor que conecta almas verdadeiramente.' }
        ];

        let drawnRunes = {
            situation: null,
            action: null,
            advice: null
        };

        let availableRunes = [];

        // Inicializar runas do amor
        function initRunesGame() {
            availableRunes = [...lovRunes];
            drawnRunes = {
                situation: null,
                action: null,
                advice: null
            };
            
            document.getElementById('runeSituation').classList.remove('flipped');
            document.getElementById('runeAction').classList.remove('flipped');
            document.getElementById('runeAdvice').classList.remove('flipped');
            
            document.getElementById('runeSituationText').innerHTML = '';
            document.getElementById('runeActionText').innerHTML = '';
            document.getElementById('runeAdviceText').innerHTML = '';
            
            document.getElementById('tarotMessage').classList.remove('active');
            document.getElementById('tarotMessage').innerHTML = '';
        }

        // Desenhar uma runa
        function drawRune(position) {
            if (availableRunes.length === 0) {
                alert('Todas as runas foram desenhadas!');
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * availableRunes.length);
            const rune = availableRunes[randomIndex];
            availableRunes.splice(randomIndex, 1);
            
            drawnRunes[position] = rune;
            
            const cardElement = document.getElementById('rune' + position.charAt(0).toUpperCase() + position.slice(1));
            const meaningElement = document.getElementById('rune' + position.charAt(0).toUpperCase() + position.slice(1) + 'Text');
            
            cardElement.classList.add('flipped');
            cardElement.innerHTML = rune.symbol;
            
            meaningElement.innerHTML = `<strong>${rune.name}:</strong> ${rune.meaning}`;
            
            // Verificar se todas as runas foram desenhadas
            if (drawnRunes.situation && drawnRunes.action && drawnRunes.advice) {
                showRunesMessage();
            }
        }

        // Mostrar mensagem final das runas
        function showRunesMessage() {
            const message = document.getElementById('tarotMessage');
            message.innerHTML = `<p>✨ Sua leitura de runas está completa. As três runas revelam um caminho claro para seu coração. Confie na sabedoria das runas e no seu caminho de amor. ✨</p>`;
            message.classList.add('active');
        }

        // Resetar jogo de runas
        function resetRunesGame() {
            initRunesGame();
        }

        
        function createStars(containerId, count) {
            const container = document.getElementById(containerId);
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.innerHTML = '⭐';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.fontSize = (8 + Math.random() * 12) + 'px';
                star.style.animation = `twinkle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`;
                container.appendChild(star);
            }
        }

        // Criar estrelas do modal
        function createModalStars() {
            const container = document.getElementById('modalStars');
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'modal-star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`;
                container.appendChild(star);
            }
        }

        // Criar carrossel de signos
        function createCarousel() {
            const carousel = document.getElementById('zodiacCarousel');
            const tripled = [...zodiacSigns, ...zodiacSigns, ...zodiacSigns];
            
            tripled.forEach(sign => {
                const card = document.createElement('div');
                card.className = 'zodiac-card';
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="card-symbol">${sign.symbol}</div>
                            <h3 class="card-name">${sign.name}</h3>
                        </div>
                        <div class="card-back">
                            <p class="card-aspect">${sign.aspect}</p>
                        </div>
                    </div>
                `;
                carousel.appendChild(card);
            });
        }



        // Modal
        function openModal() {
            document.getElementById('tarotModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('tarotModal').classList.remove('active');
            document.body.style.overflow = '';
            document.getElementById('userName').value = '';
            document.getElementById('userQuestion').value = '';
        }

        function submitForm() {
            const name = document.getElementById('userName').value.trim();
            const question = document.getElementById('userQuestion').value.trim();
            
            if (!name || !question) {
                alert('Por favor, preencha todos os campos');
                return;
            }
            
            const message = `Olá! Meu nome é ${name}. Gostaria de uma consulta de Tarô sobre: ${question}`;
            const whatsappUrl = `https://wa.me/37991262329?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            closeModal();
        }

        // Fechar modal ao clicar fora
        document.getElementById('tarotModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Countdown Timer
        function startCountdown() {
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            let hours = 23;
            let minutes = 59;
            let seconds = 59;
            
            setInterval(() => {
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                        }
                    }
                }
                
                hoursEl.textContent = String(hours).padStart(2, '0');
                minutesEl.textContent = String(minutes).padStart(2, '0');
                secondsEl.textContent = String(seconds).padStart(2, '0');
            }, 1000);
        }

        // Criar depoimentos
        function createTestimonials() {
            const container = document.getElementById('testimonialsContainer');
            
            testimonials.forEach(testimonial => {
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                
                const stars = '⭐'.repeat(testimonial.rating);
                
                card.innerHTML = `
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">${testimonial.initial}</div>
                        <div class="testimonial-info">
                            <h4>${testimonial.name}</h4>
                            <div class="testimonial-stars">${stars}</div>
                        </div>
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <span class="testimonial-service">${testimonial.service}</span>
                `;
                
                container.appendChild(card);
            });
        }
        // Pausar outros vídeos quando um estiver rodando
        document.addEventListener('play', function(e) {
            if (e.target.tagName === 'VIDEO') {
                const videos = document.querySelectorAll('video');
                videos.forEach(video => {
                    if (video !== e.target) {
                        video.pause();
                    }
                });
            }
        }, true);
        // Inicializar
        createStars('floatingStars', 20);
        createStars('tarotStars', 20);
        createModalStars();
        createCarousel();
        createTestimonials();
        initRunesGame();
        startCountdown();