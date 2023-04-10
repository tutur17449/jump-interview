import { getBeerById } from "@/services/beers";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { css } from "@stitches/react";

export interface BeerDetailsProps {
  beer: Awaited<ReturnType<typeof getBeerById>>;
}

export const getServerSideProps: GetServerSideProps<BeerDetailsProps> = async ({
  params,
}) => {
  if (!params?.id || Array.isArray(params.id)) return { notFound: true };

  const beer = await getBeerById(params.id);

  return { props: { beer } };
};

export default function BeerDetails({ beer }: BeerDetailsProps) {
  return (
    <>
      <Link href="/"> ⬅️ Go back</Link>
      <hr />
      <div className={wrapperStyle()}>
        {beer.image_url && (
          <Image
            src={beer.image_url}
            alt={beer.name}
            width={"50"}
            height={"150"}
          />
        )}
        <div className={contentStyle()}>
          <h3>{beer.name}</h3>
          <p>{beer.description}</p>
          <span>{beer.first_brewed}</span>
        </div>
      </div>
    </>
  );
}

const wrapperStyle = css({
  display: "flex",
  gap: "1rem",
});

const contentStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: ".75rem",
});
