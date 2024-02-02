import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SingleProdutctReviews from "./SingleProdutctReviews";

const ProductMoreDetails = () => {
  return (
    <main className="more_details_wrapper mt-[8.4rem]  ">
      <h2 className="py-[2rem] px-[4.8rem] bg-[#FCFCFC]">
        Producr details of LED Monitor With High Quality In The World
      </h2>
      <div className="product_infos px-[4.8rem] bg-[#FCFCFC]">
        <h3>See the best picture no matter where you sit</h3>
        <div className="flex justify-between">
          <ul>
            <li>Size : M, L, XL</li>
            <li>Product Type : Jogger</li>
            <li>Main Material : Cotton</li>
            <li>Gender : Male</li>
            <li>Waist : Mid-rise</li>
            <li>Zip : Fly</li>
          </ul>
          <ul>
            <li>Zipper : Yes</li>
            <li>Pocket : Two front and One Back Pockets.</li>
            <li>100% Authentic Product</li>
            <li>
              Product color may slightly vary due to our photography and
              Sometimes it’s vary on our devices
            </li>
          </ul>
        </div>
        <h3>Powerful intelligence for perfection</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita{" "}
        </p>
      </div>
    </main>
  );
};

export default ProductMoreDetails;
