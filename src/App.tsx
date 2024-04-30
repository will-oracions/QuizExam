import React from "react";
import axios from "axios";

import Header from "./components/Header";

import "./api/mockAxios";
import { Todo } from "./modules/todos/models/Todo";
import useTodos from "./modules/todos/hooks/useTodos";
import Sidebar from "./components/Sidebar";
import CustomModal from "./components/CustomModal/CustomModal";
// import CustomDatatable from "./components/CustomDatatable";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // const { data } = useTodos();

  // React.useEffect(() => {
  //   (async () => {
  //     await axios.post("/todos", { id: 997 });
  //     await axios.post("/todos", { id: 888 });

  //     await axios.delete("/todos/888");
  //     await axios.delete("/todos/1");

  //     const res = await axios.get("/todos");
  //     console.log("Todos: ", res.data);
  //     setTodos(res.data);
  //   })();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading todos....</p>;
  // }

  // if (error) {
  //   return <p>{error.message}</p>;
  // }

  // console.log("DATA: ", data);

  // Modal
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="app-layout" className="container">
        <div id="app-header">
          <Header />
        </div>

        <div id="app-sidebar">
          <Sidebar />
        </div>

        <main id="app-main">
          <h1>WizeTodoList</h1>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.id}</li>
            ))}
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea at
            distinctio, vel, quia ab iste optio dolores doloribus explicabo sed
            recusandae voluptate beatae excepturi rerum mollitia sequi velit
            blanditiis. Magnam.
          </p>

          <button onClick={openModal}>Opem Modal</button>
        </main>
      </div>

      <CustomModal
        title="This is the WizeTodoList Modal"
        footer={
          <div>
            <button>Add</button>
            <button>Cancel</button>
          </div>
        }
        isOpen={isOpen}
        onClose={closeModal}>
        <h2>Contenu du modal</h2>
        <p>Ce texte est à l'intérieur du modal.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
          mollitia voluptatum, nesciunt ipsa vitae enim inventore officia
          deserunt sint saepe. Et accusantium fugiat, sapiente voluptas
          asperiores rem adipisci ex sed omnis cum eum odio corrupti dolorem
          obcaecati. Debitis odit, aspernatur, possimus totam illum alias fuga
          recusandae sed quia nesciunt maxime dolorem quam odio dolore eius
          expedita adipisci error. Quae, adipisci dolorum minus accusantium
          iure, libero sed tenetur deleniti, vitae voluptatibus iste rerum
          facilis doloribus excepturi repudiandae incidunt voluptas quam soluta
          quidem facere eius necessitatibus impedit exercitationem neque?
          Reiciendis, facere similique. Aut earum autem mollitia non nisi
          veritatis quae dolorum porro maxime quis voluptatibus eius sunt nobis
          corrupti possimus totam quibusdam provident dignissimos ratione,
          laboriosam veniam voluptas animi magnam. Minus voluptatibus architecto
          quos impedit, in vero quidem maiores provident delectus placeat
          eveniet laboriosam nisi debitis beatae! Autem quibusdam eum harum vel
          adipisci laudantium praesentium beatae excepturi debitis voluptatem
          labore totam earum necessitatibus ullam soluta sequi esse, repellat
          laborum impedit sed delectus sapiente eaque repellendus saepe?
          Veritatis nisi quisquam aperiam similique natus rem ipsa hic iusto
          molestias aut sed, debitis quas dolores corrupti. Neque, eos
          perferendis provident saepe dolorum possimus accusamus voluptatum, est
          sequi, numquam at a fugiat sapiente? Vel animi aut maxime minus itaque
          tempora ut quia delectus ea beatae illum nesciunt voluptate harum
          vitae molestias nisi quisquam voluptates a, hic voluptatem nobis
          consectetur, repellat fuga? Fugiat, dolore ea. Repellendus officiis
          praesentium nesciunt est mollitia odit perferendis nihil, adipisci
          error. Mollitia non placeat nihil fuga! Minus impedit natus quod
          eveniet vitae modi doloribus eum, pariatur fugiat exercitationem,
          repudiandae tempora molestiae, corrupti cumque quia magnam neque
          officiis nesciunt aliquam soluta perspiciatis? Odit, hic ipsam animi,
          enim explicabo porro aliquid dolorem unde, voluptates tempora libero
          esse nihil error quas distinctio? Minus, laudantium. Optio minima quam
          cum nisi dignissimos voluptatem, cumque sequi laboriosam aut
          cupiditate voluptate rerum perferendis vel atque accusantium error,
          voluptatibus incidunt! Quidem sequi ut quod quae. Officiis culpa modi,
          at quo tempora omnis quam esse. Voluptatum, accusantium sapiente
          tempora nesciunt cum odit nulla accusamus numquam quas? Rem adipisci
          possimus dolorum molestiae, totam quibusdam officiis sit modi enim
          distinctio eum corrupti asperiores neque. Nisi commodi quas nemo
          reprehenderit officia nostrum incidunt esse in rerum aspernatur,
          soluta asperiores dolore odio labore cumque voluptas veritatis,
          molestias optio? Soluta quia laborum iusto sapiente vero, tempora
          consectetur voluptates natus voluptatem atque perspiciatis ex
          reprehenderit iste velit? Quidem maxime voluptatibus officiis dolor
          cumque unde iusto doloremque totam dolorem, accusamus, ullam dolores
          mollitia veniam aspernatur natus quis culpa. Quia ratione
          necessitatibus beatae! Sunt odit non deleniti aperiam officia cum
          ullam ipsam, fugit nostrum tempore porro animi, neque nam debitis
          vero? Vero, nostrum nemo placeat repellat blanditiis aliquid esse
          incidunt error cum quisquam nulla ipsum est tempore voluptatum. Rem
          error incidunt quia fugiat neque quisquam maxime, provident iusto
          alias est dicta praesentium labore ducimus. Esse voluptatem ex
          voluptatibus dolore. Dicta, voluptatibus qui. Non ipsam harum vel nam
          nemo ex molestiae. Nam sequi nisi rem obcaecati doloribus! Ullam,
          tenetur, nobis corporis, id asperiores aliquam voluptas minus ea fuga
          suscipit harum repudiandae dolorum placeat? Tempora exercitationem
          assumenda eveniet, deleniti modi porro facilis, doloremque hic eaque
          nam ut quasi. Sed, error excepturi nemo optio architecto nostrum quas
          officia consequatur omnis repellat sequi natus hic minima alias
          voluptatibus voluptate obcaecati ab rem, quod ratione impedit ipsum
          aliquam. Debitis, laboriosam ex! Nam autem libero, est sapiente sed
          sit voluptatem ipsum suscipit. Quas quasi cupiditate laboriosam
          inventore repudiandae deserunt consequuntur a ipsa sint magnam!
          Laborum non dolores quas voluptate sequi. Eaque eligendi cupiditate
          magni voluptate sed cumque repudiandae nesciunt esse fuga deleniti
          aut, qui quis tempora quaerat laborum atque itaque voluptatibus, minus
          veritatis assumenda ab beatae! Quo, cum dolor asperiores modi qui
          itaque, omnis ipsa reiciendis illum unde voluptas? A saepe, quibusdam
          vel obcaecati labore dignissimos vero est? Necessitatibus vitae illo
          eligendi, esse delectus dolorum excepturi cum ducimus aliquam sed
          repellendus veritatis optio rem neque quia blanditiis mollitia
          recusandae voluptate reiciendis nobis. Voluptatem asperiores pariatur
          vel quasi ea nesciunt error quisquam, molestiae in maiores eligendi
          aliquid ducimus amet recusandae repellendus facere velit est nobis
          dolore maxime eius esse. Corrupti in provident non accusantium rerum,
          dignissimos neque ex mollitia hic unde ad cumque illo voluptatibus a
          beatae commodi atque earum ratione itaque rem eligendi, harum eius!
          Perspiciatis voluptatibus iusto qui molestias excepturi at delectus
          fuga magni distinctio velit dolor mollitia blanditiis a voluptatum
          eius, nesciunt accusamus possimus similique obcaecati minus est autem
          officia ad ipsum. Nisi laboriosam in, veritatis voluptates natus ex
          aliquam omnis quod vitae ipsam quae eos laudantium atque eius dicta
          praesentium! Molestiae expedita, consequuntur excepturi autem tempore
          quas optio qui quia ad voluptatem hic facere veritatis maiores nulla,
          nam, praesentium sed vitae nihil. Voluptas mollitia voluptates
          quisquam perferendis. Cum officia ipsum eos tempore distinctio modi
          quis, eum rem quas sapiente accusantium temporibus doloremque,
          consectetur eaque neque aliquid ad ipsam odio. Optio reiciendis culpa
          porro dolor vero voluptatem libero autem velit aspernatur quis. Facere
          rem, sint similique culpa laudantium repudiandae quaerat, ipsa, cumque
          magni eos facilis minima dolorum. Eligendi autem dignissimos amet
          minima fugiat deserunt similique aut excepturi itaque dicta provident
          ipsam dolorum reiciendis hic expedita unde aspernatur rerum laborum
          molestiae in, odio architecto dolorem perspiciatis. Sapiente quod,
          natus provident beatae consequuntur ab magni porro ipsum laudantium
          eligendi. Eligendi, aliquid voluptatum possimus quas maiores
          reiciendis magni nihil laudantium itaque quae voluptate mollitia minus
          eum esse alias, excepturi nam iste iusto soluta error temporibus
          molestias labore earum! Aliquam illum ratione facere porro! Eius eos
          officia voluptatem quis iusto totam, repudiandae error, eum dolores
          repellat iure unde hic accusantium ex obcaecati minima esse laboriosam
          velit blanditiis quibusdam et! Provident nulla est, commodi libero
          doloribus molestias assumenda laborum temporibus, ratione ipsa
          consequuntur deleniti distinctio non ipsam iusto repellendus amet nemo
          aliquid dolor. Ullam cum nulla facilis reprehenderit suscipit rem
          ipsum doloremque dolores ad amet aut saepe voluptates vero eos
          aspernatur eum dolorum sed minima, praesentium magni ratione. Quis
          perferendis voluptatum tempora quae nihil quasi debitis amet dolore ex
          consequuntur eius excepturi mollitia corporis aliquam architecto
          quibusdam praesentium, dolores ad aperiam odio ipsum accusantium
          labore. Dicta, fuga!
        </p>
        <button onClick={closeModal}>Fermer</button>
      </CustomModal>
    </>
  );
}

export default App;
