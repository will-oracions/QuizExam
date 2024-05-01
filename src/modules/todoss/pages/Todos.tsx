import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import CustomModal from "../../../components/CustomModal/CustomModal";
import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import TodoForm from "../components/TodoForm";
import CustomDatatable from "../../../components/CustomDatatable/CustomDatatable";

import "../../../api/mockAxios";

// interface Movie {
//   label: string;
//   year: number;
// }

const Todos = () => {
  // const [todos] = React.useState<Todo[]>([]);

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
  const { isOpen, openModal, closeModal } = useCustomModal();
  const todoCreateModal = useCustomModal();

  interface Row {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "completed", headerName: "Completed", type: "boolean", width: 90 },
  ];

  const rows: Row[] = [
    { id: 1, title: "Snow", description: "Jon", completed: true },
    { id: 2, title: "Lannister", description: "Cersei", completed: false },
    { id: 3, title: "Lannister", description: "Jaime", completed: false },
    { id: 4, title: "Stark", description: "Arya", completed: false },
    { id: 5, title: "Targaryen", description: "Daenerys", completed: true },
    { id: 6, title: "Melisandre", description: "", completed: true },
    { id: 7, title: "Clifford", description: "Ferrara", completed: true },
    { id: 8, title: "Frances", description: "Rossini", completed: false },
    { id: 9, title: "Roxie", description: "Harvey", completed: true },
  ];

  // const moviesData: Movie[] = [
  //   { label: "The Shawshank Redemption", year: 1994 },
  //   { label: "The Godfather", year: 1972 },
  //   { label: "The Godfather: Part II", year: 1974 },
  //   { label: "The Dark Knight", year: 2008 },
  //   { label: "12 Angry Men", year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: "Pulp Fiction", year: 1994 },
  //   {
  //     label: "The Lord of the Rings: The Return of the King",
  //     year: 2003,
  //   },
  //   { label: "The Good, the Bad and the Ugly", year: 1966 },
  //   { label: "Fight Club", year: 1999 },
  //   {
  //     label: "The Lord of the Rings: The Fellowship of the Ring",
  //     year: 2001,
  //   },
  //   {
  //     label: "Star Wars: Episode V - The Empire Strikes Back",
  //     year: 1980,
  //   },
  //   { label: "Forrest Gump", year: 1994 },
  //   { label: "Inception", year: 2010 },
  //   {
  //     label: "The Lord of the Rings: The Two Towers",
  //     year: 2002,
  //   },
  //   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  //   { label: "Goodfellas", year: 1990 },
  //   { label: "The Matrix", year: 1999 },
  //   { label: "Seven Samurai", year: 1954 },
  //   {
  //     label: "Star Wars: Episode IV - A New Hope",
  //     year: 1977,
  //   },
  //   { label: "City of God", year: 2002 },
  //   { label: "Se7en", year: 1995 },
  //   { label: "The Silence of the Lambs", year: 1991 },
  //   { label: "It's a Wonderful Life", year: 1946 },
  //   { label: "Life Is Beautiful", year: 1997 },
  //   { label: "The Usual Suspects", year: 1995 },
  //   { label: "Léon: The Professional", year: 1994 },
  //   { label: "Spirited Away", year: 2001 },
  //   { label: "Saving Private Ryan", year: 1998 },
  //   { label: "Once Upon a Time in the West", year: 1968 },
  //   { label: "American History X", year: 1998 },
  //   { label: "Interstellar", year: 2014 },
  //   { label: "Casablanca", year: 1942 },
  //   { label: "City Lights", year: 1931 },
  //   { label: "Psycho", year: 1960 },
  //   { label: "The Green Mile", year: 1999 },
  //   { label: "The Intouchables", year: 2011 },
  //   { label: "Modern Times", year: 1936 },
  //   { label: "Raiders of the Lost Ark", year: 1981 },
  //   { label: "Rear Window", year: 1954 },
  //   { label: "The Pianist", year: 2002 },
  //   { label: "The Departed", year: 2006 },
  //   { label: "Terminator 2: Judgment Day", year: 1991 },
  //   { label: "Back to the Future", year: 1985 },
  //   { label: "Whiplash", year: 2014 },
  //   { label: "Gladiator", year: 2000 },
  //   { label: "Memento", year: 2000 },
  //   { label: "The Prestige", year: 2006 },
  //   { label: "The Lion King", year: 1994 },
  //   { label: "Apocalypse Now", year: 1979 },
  //   { label: "Alien", year: 1979 },
  //   { label: "Sunset Boulevard", year: 1950 },
  //   {
  //     label:
  //       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  //     year: 1964,
  //   },
  //   { label: "The Great Dictator", year: 1940 },
  //   { label: "Cinema Paradiso", year: 1988 },
  //   { label: "The Lives of Others", year: 2006 },
  //   { label: "Grave of the Fireflies", year: 1988 },
  //   { label: "Paths of Glory", year: 1957 },
  //   { label: "Django Unchained", year: 2012 },
  //   { label: "The Shining", year: 1980 },
  //   { label: "WALL·E", year: 2008 },
  //   { label: "American Beauty", year: 1999 },
  //   { label: "The Dark Knight Rises", year: 2012 },
  //   { label: "Princess Mononoke", year: 1997 },
  //   { label: "Aliens", year: 1986 },
  //   { label: "Oldboy", year: 2003 },
  //   { label: "Once Upon a Time in America", year: 1984 },
  //   { label: "Witness for the Prosecution", year: 1957 },
  //   { label: "Das Boot", year: 1981 },
  //   { label: "Citizen Kane", year: 1941 },
  //   { label: "North by Northwest", year: 1959 },
  //   { label: "Vertigo", year: 1958 },
  //   {
  //     label: "Star Wars: Episode VI - Return of the Jedi",
  //     year: 1983,
  //   },
  //   { label: "Reservoir Dogs", year: 1992 },
  //   { label: "Braveheart", year: 1995 },
  //   { label: "M", year: 1931 },
  //   { label: "Requiem for a Dream", year: 2000 },
  //   { label: "Amélie", year: 2001 },
  //   { label: "A Clockwork Orange", year: 1971 },
  //   { label: "Like Stars on Earth", year: 2007 },
  //   { label: "Taxi Driver", year: 1976 },
  //   { label: "Lawrence of Arabia", year: 1962 },
  //   { label: "Double Indemnity", year: 1944 },
  //   {
  //     label: "Eternal Sunshine of the Spotless Mind",
  //     year: 2004,
  //   },
  //   { label: "Amadeus", year: 1984 },
  //   { label: "To Kill a Mockingbird", year: 1962 },
  //   { label: "Toy Story 3", year: 2010 },
  //   { label: "Logan", year: 2017 },
  //   { label: "Full Metal Jacket", year: 1987 },
  //   { label: "Dangal", year: 2016 },
  //   { label: "The Sting", year: 1973 },
  //   { label: "2001: A Space Odyssey", year: 1968 },
  //   { label: "Singin' in the Rain", year: 1952 },
  //   { label: "Toy Story", year: 1995 },
  //   { label: "Bicycle Thieves", year: 1948 },
  //   { label: "The Kid", year: 1921 },
  //   { label: "Inglourious Basterds", year: 2009 },
  //   { label: "Snatch", year: 2000 },
  //   { label: "3 Idiots", year: 2009 },
  //   { label: "Monty Python and the Holy Grail", year: 1975 },
  // ];

  // const handleOpenTodoCreateModal = () => {
  //   todoCreateModal.openModal();
  // };

  return (
    <>
      <div id="app-sidebar">
        {/* <Sidebar onCreateTodo={handleOpenTodoCreateModal} /> */}
      </div>

      <main id="app-main">
        {/* <h1>WizeTodoList</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.id}</li>
          ))}
        </ul> */}

        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea at
          distinctio, vel, quia ab iste optio dolores doloribus explicabo sed
          recusandae voluptate beatae excepturi rerum mollitia sequi velit
          blanditiis. Magnam.
        </p> */}

        <button onClick={openModal}>Opem Modal</button>

        <CustomDatatable<Row>
          rows={rows}
          columns={columns}
          onEdit={(row) => console.log(row)}
          onDelete={(row) => console.log(row)}
        />
      </main>

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

        <TodoForm onSubmit={(data) => console.log("Data: ", data)} />

        {/* <CustomAutoComplete<Movie> label="The Movie" data={moviesData} /> */}
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

      <CustomModal
        title="Create a todo"
        footer={
          <div>
            <Button
              className="modal-action-button"
              type="submit"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}>
              Cancel
            </Button>

            <Button
              className="modal-action-button"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              Create
            </Button>
          </div>
        }
        isOpen={todoCreateModal.isOpen}
        onClose={todoCreateModal.closeModal}>
        <TodoForm onSubmit={(data) => console.log("Data: ", data)} />
      </CustomModal>
    </>
  );
};

export default Todos;
