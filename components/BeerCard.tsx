import Image from "next/image";
import { Beer } from "@/services/beers";
import Link from "next/link";
import { css } from "@/stitches.config";
import { motion } from "framer-motion";
import { itemVariant } from "@/utils/framer";

interface BeerCardProps {
  beer: Beer;
}

export const BeerCard = ({ beer }: BeerCardProps) => (
  <motion.div variants={itemVariant}>
    <Link href={`/beers/${beer.id}`} className={wrapperStyle()}>
      {beer.image_url && (
        <Image
          src={beer.image_url}
          alt={beer.name}
          width={"30"}
          height={"90"}
        />
      )}
      <div>
        <h3>{beer.name}</h3>
        <span>{beer.first_brewed}</span>
      </div>
    </Link>
  </motion.div>
);

const wrapperStyle = css({
  display: "flex",
  gap: ".75rem",
  color: "black",
  border: "1px solid grey",
  borderRadius: "4px",
  padding: ".75rem",
  "&:hover": {
    cursor: "pointer",
    background: "#F6F6F6",
    transition: "all 250ms",
    borderColor: "black",
  },
});
