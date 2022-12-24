import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCheckCircle,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Gutter = () => {
  return (
    <section className="max-w-7xl mx-auto p-10 md:p-0 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="flex justify-between  bg-[#C29D59] text-white p-6">
          <div>
            <FontAwesomeIcon size="2x" className="pr-5" icon={faGlobe} />
          </div>
          <div>
            <h3 className="text-2xl font-medium">700+ DESTINATIONS</h3>
            <p>
              Far far away, behind the word mountains, far countries Vokalia.
            </p>
          </div>
        </div>

        <div className="flex justify-between  bg-[#C29D59] text-white p-6">
          <div>
            <FontAwesomeIcon size="2x" className="pr-5" icon={faCheckCircle} />
          </div>
          <div>
            <h3 className="text-2xl font-medium">BEST PRICE GUARANTEE</h3>
            <p>
              Far far away, behind the word mountains, far countries Vokalia.
            </p>
          </div>
        </div>
        <div className="flex justify-between  bg-[#C29D59] text-white p-6">
          <div>
            <FontAwesomeIcon size="2x" className="pr-5" icon={faHeadset} />
          </div>
          <div>
            <h3 className="text-2xl font-medium">TOP NOTCH SUPPORT</h3>
            <p>
              Far far away, behind the word mountains, far countries Vokalia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gutter;
