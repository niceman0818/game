// 게임 데이터
const games = [
    {
      name: "Adopt Me!",
      players: "250K",
      rating: "4.8",
      description:
        "Adopt and raise pets in this popular role-playing game. Trade pets, decorate your house, and make friends in a vibrant community.",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
    },
    {
      name: "Brookhaven",
      players: "200K",
      rating: "4.7",
      description:
        "Experience life in a bustling city where you can own homes, drive vehicles, and roleplay various professions in this immersive world.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      name: "Blox Fruits",
      players: "180K",
      rating: "4.6",
      description:
        "Battle pirates and marines in this action-packed adventure game. Train your character, eat magical fruits, and master unique fighting styles.",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd",
    },
    {
      name: "Pet Simulator X",
      players: "150K",
      rating: "4.5",
      description:
        "Collect, train, and upgrade unique pets while exploring vast worlds. Trade with other players and discover rare creatures in this simulator game.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      name: "Murder Mystery 2",
      players: "120K",
      rating: "4.4",
      description:
        "Play as innocent, sheriff, or murderer in this thrilling multiplayer mystery game. Use strategy and deduction to survive and win each round.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    },
    {
      name: "Tower of Hell",
      players: "100K",
      rating: "4.3",
      description:
        "Challenge yourself in this intense parkour game featuring randomly generated towers. Race against time and compete with other players to reach the top.",
      image: "https://images.unsplash.com/photo-1585504198199-20277593b94f",
    },
  ];
  
  
  // DOM 요소 생성
function createCard(game) {
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement("img");
    img.src = game.image;
    img.alt = game.name;
    card.appendChild(img);
  
    const content = document.createElement("div");
    content.className = "card-content";
  
    const title = document.createElement("h3");
    title.textContent = game.name;
    content.appendChild(title);
  
    const info = document.createElement("div");
    info.className = "info";
  
    const players = document.createElement("span");
    players.textContent = `Players: ${game.players}`;
  
    // 수정된 부분: rating 글자를 별 아이콘으로 변경
    const rating = document.createElement("div");
    rating.className = "rating";
  
    // 별 아이콘 추가
    const starIcon = document.createElement("i");
    starIcon.className = "fas fa-star"; // Font Awesome 별 아이콘 클래스
    rating.appendChild(starIcon);
  
    // 숫자 추가
    const ratingText = document.createTextNode(` ${game.rating}`);
    rating.appendChild(ratingText);
  
    // info에 players와 rating 추가
    info.appendChild(players);
    info.appendChild(rating);
  
    content.appendChild(info);
  
    const description = document.createElement("p");
    description.textContent = game.description;
    content.appendChild(description);
  
    card.appendChild(content);
  
    return card;
  }
  
  
  // 렌더링 함수
  function renderApp() {
    const root = document.getElementById("root");
  
    const container = document.createElement("div");
    container.className = "container";
  
    const header = document.createElement("div");
    header.className = "header";
  
    const title = document.createElement("h1");
    title.textContent = "Popular Roblox Games";
    header.appendChild(title);
  
    const buttons = document.createElement("div");
    buttons.className = "buttons";
  
    const categories = [
        { name: "Popular", iconClass: "fas fa-chart-line" },
        { name: "Rating", iconClass: "fas fa-star" },
        { name: "Weekly", iconClass: "fas fa-clock" },
        { name: "Monthly", iconClass: "fas fa-calendar-alt" },
      ];
      categories.forEach((item) => {
        const button = document.createElement("button");
      
        const icon = document.createElement("i");
        icon.className = item.iconClass; // 아이콘 클래스 추가
        button.appendChild(icon);
      
        const textNode = document.createTextNode(` ${item.name}`);
        button.appendChild(textNode);
      
        buttons.appendChild(button);
      });
      
  
    header.appendChild(buttons);
    container.appendChild(header);
  
    const searchBar = document.createElement("div");
    searchBar.className = "search-bar";
  
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search games...";
    
    searchBar.appendChild(searchInput);
    container.appendChild(searchBar);
  
    const cardGrid = document.createElement("div");
    cardGrid.className = "card-grid";
  
    games.forEach((game) => {
      const card = createCard(game);
      cardGrid.appendChild(card);
    });
  
    container.appendChild(cardGrid);
    root.appendChild(container);
  }
  
  // 앱 렌더링
  renderApp();
  