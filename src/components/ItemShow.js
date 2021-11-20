import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const lists = [
  {
    title: "ผลปีศาจ-BloxFruit",
    description: "บริการเติมผลปีศาจถาวร",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
  {
    title: "เกมพาส-BloxFruit",
    description: "บริการเติมเกมพาสถาวร-Blox Fruit",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
  {
    title: "ผลปีศาจ-King Legacy",
    description: "บริการเติมผลปีศาจถาวร",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
  {
    title: "เกมพาส-King Legacy",
    description: "บริการเติมผลปีศาจถาวร",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
  {
    title: "Gift-Gem All Star",
    description: "รับกด Gem map All Star",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
  {
    title: "Gift-item Anime Fighters",
    description: "รับกด Gift item Anime Fighters",
    cover:
      "https://play-lh.googleusercontent.com/3QAgSY5a64aDHgXNRYJJCB5vpg3E3b74741VfSUlDxY2dcENKM1lmbWsu5jazYdo_kY",
  },
];

const Item = (props) => {
  return (
    <div className="max-w-sm rounded-lg border-5 overflow-hidden shadow-lg bg-light card-list ">
      <img class="w-full" src={props.cover} alt="Sunset in the mountains" />
      <div className=" flex flex-row items-center px-3">
        <div>
          <i class="fas fa-dollar-sign text-6xl"></i>
        </div>
        <div className="px-6 py-4 flex flex-col">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function itemShow() {
  return (
    <div className="py-4 flex flex-row gap-3 w-full justify-center w-96 flex-wrap lg:px-6 px-3 animate__animated animate__fadeIn">
      {lists.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}
