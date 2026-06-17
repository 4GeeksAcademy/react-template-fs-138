import {
  Image as ImageIcon,
  Ruler,
  Weight,
  Heart,
  Flame,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CardPokemon({ pokemon }) {
  return (
    <div className="col-md-4 my-2">
      <div className="card shadow-lg">
        <div className="d-flex g-0 align-items-center">
          <div className="w-100 text-center bg-light p-4">
            <img
              src={
                pokemon.sprites?.other["official-artwork"].front_default ||
                pokemon.sprites?.front_default
              }
              alt={pokemon.name}
              className="img-fluid mb-3"
              style={{ maxHeight: 250 }}
            />
            <h2 className="text-capitalize mb-2">
              <ImageIcon className="me-2" size={24} />
              {pokemon.name}
            </h2>
            <span className="badge bg-primary fs-6 mb-2">
              #{pokemon.id}
            </span>
            <div className="mb-2">
              {pokemon.types.map((t, index) => (
                <span
                  key={index}
                  className="badge bg-warning text-dark me-2 text-uppercase"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
            <Link
              to={`/pokemon/${pokemon.name}`}
              className="btn btn-primary btn-sm"
            >
              Ver detalle
            </Link>
          </div>


        </div>
      </div>
    </div>
  )

}