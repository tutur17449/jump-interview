import { Beer } from "@/services/beers";
import Link from "next/link";
import { css } from "@/stitches.config";
import { motion } from "framer-motion";
import { itemVariant } from "@/utils/framer";

interface BeerItemLinkProps {
  beer: Beer;
}

export const BeerItemLink = ({ beer }: BeerItemLinkProps) => (
  <motion.div variants={itemVariant}>
    <Link key={beer.id} href={`/beers/${beer.id}`} className={linkStyle()}>
      <p>{beer.name}</p>
      <span>{beer.first_brewed}</span>
    </Link>
  </motion.div>
);

const linkStyle = css({
  display: "flex",
  justifyContent: "space-between",
  padding: ".5rem",
  "&:hover": {
    cursor: "pointer",
    background: "#F6F6F6",
    transition: "all 250ms",
    borderColor: "black",
  },
});
