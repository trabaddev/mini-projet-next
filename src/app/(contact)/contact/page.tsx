import React from "react";
import Card from "./Card";
import Image from "next/image";
import Button from "@/components/Button";

type Props = {};

type contactType = {
  id: number;
  nom: string;
  email: string;
  tel: string;
  avatar: string;
};

export default function PageContact({}: Props) {
  const contactsDb: contactType[] = [
    {
      id: 1,
      nom: "Aka Luck",
      email: "akaluc@gmail.com",
      tel: "+243 999 999 999",
      avatar: "/avata/avata1.jpg",
    },

    {
      id: 3,
      nom: "Marie Curie",
      email: "marie@gmail",
      tel: "+243 999 999 999",
      avatar: "/avata/avata1.jpg",
    },
    {
      id: 4,
      nom: "Albert Einstein",
      email: "albert@gmail",
      tel: "+243 999 999 999",
      avatar: "/avata/avata2.jpg",
    },
    {
      id: 5,
      nom: "Isaac Newton",
      email: "isaac@gmail",
      tel: "+243 999 999 999",

      avatar: "/avata/avata3.jpg",
    },
  ];

  return (
    <div>
      <Card title="Liste des contacts">
        <div className=" p-4 my-6 w-[75%] ">
          {contactsDb.map((contact) => (
            <div className="flex justify-around border border-black/10 p-2">
              <div className="flex">
                <Image src={`${contact.avatar}`} alt={`${contact.nom}`} width={80} height={80} />
                <div>
                  <h1>{contact.nom} </h1>
                  <strong>{contact.email} </strong>
                  <p>{contact.tel} </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="primary">Detail</Button>
                <Button variant="danger">supprimer</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
