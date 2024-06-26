import React from "react";

function CardComponent() {
  const cardData = [
    {
      id: 1,
      imageUrl: "./images/1.jpg",
      text: "Women Ethnic Wear \nup to 50% off",
    },
    {
      id: 2,
      imageUrl: "./images/2.jpg",
      text: "Women's Ethnic Wear \nup to 50% off",
    },
    {
      id: 3,
      imageUrl: "./images/3.jpg",
      text: "Men's Ethnic Wear \nup to 50% off",
    },
    {
      id: 4,
      imageUrl: "./images/4.jpg",
      text: "WFH Casual Wear \nup to 50% off",
    },
    {
      id: 5,
      imageUrl: "./images/5.jpg",
      text: "Men's Active Wear \nup to 50% off",
    },
    {
      id: 6,
      imageUrl: "./images/6.jpg",
      text: "Women's Western Wear \nup to 50% off",
    },
    { id: 7, imageUrl: "./images/7.jpg", text: "Kids Wear \nup to 50% off" },
    {
      id: 8,
      imageUrl: "./images/8.jpg",
      text: "Watches \nup to 50% off",
    },
    {
      id: 9,
      imageUrl: "./images/1.jpg",
      text: "Grooming \nup to 50% off",
    },
    {
      id: 10,
      imageUrl: "./images/2.jpg",
      text: "Beauty & Makeup \nup to 50% off",
    },
    {
      id: 11,
      imageUrl: "./images/1.jpg",
      text: "Women Ethnic Wear \nup to 50% off",
    },
    {
      id: 12,
      imageUrl: "./images/1.jpg",
      text: "Women Ethnic Wear \nup to 50% off",
    },
  ];

  return (
    <div className="card-container cards">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col mb-4">
            <div className="card border border-dark">
              <img
                src={card.imageUrl}
                className="card-img-top"
                alt={`Card ${card.id}`}
                style={{
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  width: "100%",
                }}
              />
              <div className="card-body bg-light p-3 text-center">
                <p
                  className="card-text text-dark fw-bold"
                  style={{ whiteSpace: "pre-line", fontSize: "14px" }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
