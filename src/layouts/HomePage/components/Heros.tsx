import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Heros = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-O mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Qu'avez vous lu ?</h1>
              <p className="lead">
                L'equipe de la bibliotheque aimerait savoir ce que vous avez lu.
                Que ce soit pour acquerir de nouvelles compétences ou pour vous
                perfectionner. Nous serons en mesurer de vous proposer les
                meilleurs ressources
              </p>
              {isAuthenticated ? (
                <Link
                  type="button"
                  className="btn main-color btn-lg text-white"
                  to="search"
                >
                  Découvrez nos bestsellers
                </Link>
              ) : (
                <Link className="btn main-color btn-lg text-white" to="/login">
                  S'inscrire
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-4 col-md-4 container d-flex 
                    justify-content-center align-items-center"
          >
            <div className="ml-2">
              <h1>Notre collection est en constante evolution</h1>
              <p className="lead">
                Consulter quotidiennement notre collection qui change chaque
                jour. Nous travaillons sans arrêt à vous fournir la selection de
                livre la plus efficace pour nos apprentis dev
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
        {/* Mobile Heros */}
        <div className="d-lg-none">
          <div className="container">
            <div className="m-2">
              <div className="col-image-left">
                <div className="mt-2">
                  <h1>Qu'avez vou lu ?</h1>
                  <p className="lead">
                    L'equipe de la bibliotheque aimerait savoir ce que vous avez
                    lu. Que ce soit pour acquerir de nouvelles compétences ou
                    pour vous perfectionner. Nous serons en mesurer de vous
                    proposer les meilleurs ressources
                  </p>
                  {isAuthenticated ? (
                    <Link
                      type="button"
                      className="btn main-color btn-lg text-white"
                      to="search"
                    >
                       Découvrez nos bestsellers
                    </Link>
                  ) : (
                    <Link
                      className="btn main-color btn-lg text-white"
                      to="/login"
                    >
                       S'inscrire
                    </Link>
                  )}
                </div>
              </div>
              <div className="m-2">
                <div className="col-image-right"></div>
                <div className="mt-2">
                  <h1>Notre collection est en constante evolution</h1>
                  <p className="lead">
                    Consulter quotidiennement notre collection qui change chaque
                    jour Nous travaillons sans relâche à vous fournir la
                    selection de livre la plus efficace pour nos lecteurs dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
