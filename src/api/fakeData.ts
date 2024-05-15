import { AssigneeGenderEnum } from "../modules/assignees/models/Assignee";

export const assigneeFakeData = [
  {
    id: 1,
    name: "Étienne Henry",
    email: "Aleaume_Pierre@yahoo.fr",
    phone: "0436707047",
    gender: AssigneeGenderEnum.MAN,
  },
  {
    id: 2,
    name: "Daphné Clement",
    email: "Aliette.Morel@yahoo.fr",
    phone: "+33 610975921",
    gender: AssigneeGenderEnum.WOMEN,
  },
  {
    id: 3,
    name: "Daniel Olivier",
    email: "Alcibiade_Riviere75@hotmail.fr",
    phone: "0648575275",
    gender: AssigneeGenderEnum.MAN,
  },
  {
    id: 4,
    name: "Aloyse Poirier",
    email: "Jrme_Muller43@yahoo.fr",
    phone: "0588778834",
    gender: AssigneeGenderEnum.MAN,
  },
  {
    id: 5,
    name: "M Émilie Brunet",
    email: "Abeline.Clement@yahoo.fr",
    phone: "0505846763",
    gender: AssigneeGenderEnum.WOMEN,
  },
  {
    id: 6,
    name: "Clovis Roger",
    email: "Raphal_Fournier42@yahoo.fr",
    phone: "0275261249",
    gender: AssigneeGenderEnum.WOMEN,
  },
  {
    id: 7,
    name: "Dr Inès Jean",
    email: "Achaire25@yahoo.fr",
    phone: "0175049975",
    gender: AssigneeGenderEnum.WOMEN,
  },
  {
    id: 8,
    name: "Anselme Marty",
    email: "Jade_Morin@yahoo.fr",
    phone: "0573990480",
    gender: AssigneeGenderEnum.MAN,
  },
  {
    id: 9,
    name: "Samuel Brun",
    email: "Mlisande.Muller@gmail.com",
    phone: "0411642608",
    gender: AssigneeGenderEnum.MAN,
  },
  {
    id: 10,
    name: "Axel Menard",
    email: "Chlo.Dumas29@gmail.com",
    phone: "+33 345418159",
    gender: AssigneeGenderEnum.WOMEN,
  },
];

export const todoFakeData = [
  {
    id: 1,
    title: "et sed sunt",
    assigneeId: 9,
    startDate: "2024-05-01T02:56:33.187Z",
    endDate: "2024-05-28T01:27:52.247Z",
    prority: "3",
    labels: ["2", "2"],
    description:
      "Cumque est quo inventore ab. Beatae corrupti modi consectetur. Minima dignissimos voluptas.",
    completed: true,
  },
  {
    id: 2,
    title: "eum sed nobis",
    assigneeId: 9,
    startDate: "2024-05-01T09:03:18.530Z",
    endDate: "2024-09-16T15:30:23.915Z",
    prority: "2",
    labels: ["4"],
    description:
      "Itaque beatae voluptatem ut vitae enim et saepe. Corrupti distinctio nemo animi molestiae quae aut ut numquam. Quisquam adipisci distinctio nesciunt ad excepturi ut. Quisquam rerum omnis eligendi. Dolor similique amet et dolore libero nam.",
    completed: false,
  },
  {
    id: 3,
    title: "quisquam et in",
    assigneeId: 5,
    startDate: "2024-05-01T14:16:18.096Z",
    endDate: "2024-07-26T20:16:56.754Z",
    prority: "3",
    labels: ["2", "3"],
    description:
      "Provident quis dolorum atque maiores. Explicabo et soluta natus assumenda odit aperiam explicabo non at. Sint sint quibusdam natus minus.",
    completed: false,
  },
  {
    id: 4,
    title: "voluptas dolores rerum",
    assigneeId: 3,
    startDate: "2024-05-01T12:44:58.465Z",
    endDate: "2025-02-22T20:13:26.297Z",
    prority: "2",
    labels: ["3", "2"],
    description:
      "Voluptatem est inventore suscipit laboriosam provident minima deserunt ut. Quidem repudiandae occaecati nobis. Omnis dolor ut atque aut mollitia rerum dicta. Cumque blanditiis voluptas quisquam quae beatae similique aut earum. Molestias vitae molestias. Eius provident sint ut nobis commodi quae odio.",
    completed: true,
  },
  {
    id: 5,
    title: "sunt ratione laudantium",
    assigneeId: 9,
    startDate: "2024-05-01T06:31:44.912Z",
    endDate: "2024-09-16T06:45:59.744Z",
    prority: "2",
    labels: ["2", "2", "1"],
    description:
      "Aut sit cum minus perferendis. Omnis aspernatur facere aut numquam soluta. Eum dicta reprehenderit dignissimos incidunt adipisci voluptate reprehenderit autem. Rem voluptas impedit hic. Excepturi et blanditiis id delectus. Ab voluptas veniam facere ullam accusantium aspernatur dignissimos consequatur.",
    completed: true,
  },
  {
    id: 6,
    title: "explicabo facilis perferendis",
    assigneeId: 8,
    startDate: "2024-04-30T21:52:35.688Z",
    endDate: "2025-02-08T10:08:03.899Z",
    prority: "1",
    labels: ["4"],
    description:
      "Excepturi quidem et distinctio qui labore rerum. Corporis provident deleniti. Ut provident quo sequi omnis natus corrupti earum voluptatem quod. Autem explicabo necessitatibus sit. A hic molestiae consequuntur dolore. Eius sint ea aut et.",
    completed: false,
  },
  {
    id: 7,
    title: "aliquam ut neque",
    assigneeId: 2,
    startDate: "2024-05-01T15:05:14.651Z",
    endDate: "2025-01-28T01:49:09.750Z",
    prority: "1",
    labels: ["1", "2"],
    description:
      "Fugit autem earum voluptates commodi sint. Qui qui accusamus dolores sequi dolores architecto. Qui id culpa corrupti vero odit consequatur sed ut. Omnis unde voluptatibus.",
    completed: true,
  },
  {
    id: 8,
    title: "nihil ipsum qui",
    assigneeId: 5,
    startDate: "2024-05-01T07:01:37.649Z",
    endDate: "2024-11-14T14:30:59.370Z",
    prority: "1",
    labels: ["3", "1", "4"],
    description:
      "Unde voluptas ex nulla laudantium laborum exercitationem blanditiis pariatur cum. Sed soluta aut voluptas similique aut reiciendis eum qui velit. Voluptatibus facere repellat ratione qui et dolores cumque blanditiis quos. Doloribus earum ut magni ad asperiores possimus veritatis. Praesentium sapiente consequatur quae omnis quibusdam eligendi.",
    completed: false,
  },
  {
    id: 9,
    title: "est dicta nostrum",
    assigneeId: 8,
    startDate: "2024-05-01T08:47:19.476Z",
    endDate: "2024-07-16T08:05:41.018Z",
    prority: "3",
    labels: ["4", "3", "2"],
    description:
      "Aut deserunt repudiandae eligendi harum corrupti qui. Rem nam et voluptatem accusamus itaque voluptatem consequuntur voluptas animi. Assumenda tenetur nulla in sunt libero. Dolorem aut dolorum occaecati pariatur culpa sit. Omnis expedita minima quibusdam quo exercitationem.",
    completed: false,
  },
  {
    id: 10,
    title: "placeat natus totam",
    assigneeId: 2,
    startDate: "2024-05-01T09:04:41.567Z",
    endDate: "2024-08-11T21:54:15.938Z",
    prority: "3",
    labels: ["2", "4", "3"],
    description:
      "Quaerat quasi voluptatem molestiae hic. Tenetur et quaerat similique nobis nihil ipsa quibusdam qui ipsa. Delectus fugiat facilis est omnis. Hic omnis saepe.",
    completed: true,
  },
  {
    id: 11,
    title: "nemo sapiente dolorem",
    assigneeId: 2,
    startDate: "2024-05-01T12:29:39.759Z",
    endDate: "2024-05-06T19:42:29.395Z",
    prority: "2",
    labels: ["2", "2", "4"],
    description:
      "Labore provident quia autem aut esse suscipit quis tenetur. Enim illum officia ratione. Voluptates aspernatur optio tempora optio id et autem aspernatur deserunt. Eos temporibus dolores officiis et esse in ullam nobis. Et cum aut consequatur adipisci.",
    completed: false,
  },
  {
    id: 12,
    title: "sapiente voluptas accusamus",
    assigneeId: 6,
    startDate: "2024-05-01T10:06:48.760Z",
    endDate: "2024-05-04T22:03:37.878Z",
    prority: "1",
    labels: ["3", "4"],
    description:
      "Quos voluptatem perspiciatis beatae. Omnis qui corporis. Laborum et ut quia veniam rerum quis sunt voluptas et. Reiciendis quia et cumque cupiditate ex deleniti quasi quidem.",
    completed: false,
  },
  {
    id: 13,
    title: "et ut excepturi",
    assigneeId: 3,
    startDate: "2024-05-01T03:22:51.493Z",
    endDate: "2025-04-21T05:38:40.190Z",
    prority: "2",
    labels: ["3", "4"],
    description:
      "Non qui in. At illo cupiditate et consequatur itaque aut quae. Error aliquam cupiditate reiciendis. Et officia commodi qui a non. Quod cupiditate voluptatum voluptas quia.",
    completed: true,
  },
  {
    id: 14,
    title: "voluptatem nulla at",
    assigneeId: 9,
    startDate: "2024-05-01T00:38:39.417Z",
    endDate: "2024-07-16T20:50:45.786Z",
    prority: "3",
    labels: ["2"],
    description:
      "Aut incidunt autem excepturi sed quasi autem. Est voluptas saepe et laudantium dolores. Pariatur earum et non minima. Laudantium quos sequi ratione nulla nesciunt distinctio iure labore. Est voluptatum accusantium dolores exercitationem. Officiis aut nihil nobis non ducimus quasi labore itaque.",
    completed: false,
  },
  {
    id: 15,
    title: "aspernatur repudiandae consequuntur",
    assigneeId: 9,
    startDate: "2024-04-30T23:18:33.970Z",
    endDate: "2025-02-19T02:16:59.084Z",
    prority: "3",
    labels: ["4"],
    description:
      "Qui amet modi laudantium quaerat nulla consectetur repellendus quibusdam magnam. Voluptatem itaque nihil aspernatur repudiandae unde consectetur sed soluta. Est blanditiis aut molestias distinctio ea consequatur nisi ipsa sequi. Quasi impedit et aut nam aut vitae voluptate eum.",
    completed: true,
  },
  {
    id: 16,
    title: "at a iure",
    assigneeId: 5,
    startDate: "2024-05-01T15:16:20.775Z",
    endDate: "2025-01-14T23:32:00.414Z",
    prority: "2",
    labels: ["1", "3"],
    description:
      "Voluptatem beatae qui. Earum nisi sapiente molestias occaecati repellat laudantium similique. Dicta deserunt id quis omnis a molestias. Dolorem nesciunt aut qui sed harum et dignissimos quis. Qui ut eos cum. Iste odio ab et et.",
    completed: true,
  },
  {
    id: 17,
    title: "et unde rerum",
    assigneeId: 3,
    startDate: "2024-05-01T06:45:47.056Z",
    endDate: "2024-10-11T05:59:20.124Z",
    prority: "3",
    labels: ["2", "4", "2"],
    description:
      "Delectus ad rerum esse dolorem nobis et quia at quia. Vel sunt est. Fugiat est ipsam corporis neque eos facilis. Dolorem accusamus illo cumque doloremque tenetur ut facilis. Magnam cum sit dolores iusto veniam. Non sed et.",
    completed: true,
  },
  {
    id: 18,
    title: "quisquam id qui",
    assigneeId: 6,
    startDate: "2024-05-01T17:55:06.259Z",
    endDate: "2025-03-26T15:48:51.493Z",
    prority: "3",
    labels: ["1", "4", "2"],
    description:
      "Aperiam id aut id nobis libero sunt. Harum doloribus asperiores. Accusamus veniam accusamus sit nostrum excepturi aut ipsam. Sit totam quas voluptatum minus aperiam aut recusandae aut necessitatibus.",
    completed: true,
  },
  {
    id: 19,
    title: "voluptatem accusantium assumenda",
    assigneeId: 3,
    startDate: "2024-05-01T08:10:27.300Z",
    endDate: "2025-04-24T07:34:49.596Z",
    prority: "2",
    labels: ["1", "1"],
    description:
      "Sit laboriosam aut doloribus nihil soluta qui et possimus. Fugit expedita qui a. Voluptates incidunt molestiae reiciendis vel.",
    completed: true,
  },
  {
    id: 20,
    title: "ea excepturi id",
    assigneeId: 6,
    startDate: "2024-05-01T17:29:59.182Z",
    endDate: "2025-04-09T19:37:10.072Z",
    prority: "1",
    labels: ["4"],
    description:
      "Eligendi delectus vel sed cupiditate dolorem delectus nemo. Ad totam aut. Natus modi repellat dicta mollitia iste voluptatem qui qui ut. Debitis rerum et earum porro voluptatem.",
    completed: true,
  },
  {
    id: 21,
    title: "voluptates rerum et",
    assigneeId: 9,
    startDate: "2024-05-01T12:18:48.784Z",
    endDate: "2025-03-24T20:05:45.746Z",
    prority: "3",
    labels: ["2", "4", "2"],
    description:
      "Autem qui autem in deserunt exercitationem. Ullam accusamus autem. In et ab mollitia et. Eaque consequatur dolorum recusandae consequatur. Quis magnam debitis deleniti et laudantium. Aut sapiente nihil ad.",
    completed: true,
  },
  {
    id: 22,
    title: "sed enim eos",
    assigneeId: 5,
    startDate: "2024-04-30T23:41:14.846Z",
    endDate: "2024-12-03T15:38:36.281Z",
    prority: "3",
    labels: ["2"],
    description:
      "Atque odio accusamus ab ducimus commodi. Quam deserunt totam. Non dolorem optio expedita est blanditiis tenetur architecto. Odit quidem consequatur corporis ipsam rerum cum sit. Aut fugit dignissimos esse deserunt.",
    completed: false,
  },
  {
    id: 23,
    title: "eum repudiandae repellendus",
    assigneeId: 10,
    startDate: "2024-05-01T06:19:15.268Z",
    endDate: "2024-06-22T22:51:14.402Z",
    prority: "2",
    labels: ["3"],
    description:
      "Quas qui dignissimos possimus corporis id. Aspernatur sit sed nihil doloribus veniam culpa. Quaerat ut natus consequatur quasi corrupti. Facilis error doloremque eum aut amet et est nobis sequi. Saepe dolor rem odit omnis neque. Incidunt ut id earum excepturi saepe doloremque.",
    completed: true,
  },
  {
    id: 24,
    title: "maiores repellat aut",
    assigneeId: 4,
    startDate: "2024-05-01T10:31:46.706Z",
    endDate: "2024-08-10T04:24:49.679Z",
    prority: "2",
    labels: ["3", "4"],
    description:
      "Pariatur laboriosam sit architecto et enim iste neque et natus. Soluta molestias natus perferendis tempore. Repudiandae neque quasi soluta non.",
    completed: true,
  },
  {
    id: 25,
    title: "esse rerum qui",
    assigneeId: 9,
    startDate: "2024-05-01T04:38:52.650Z",
    endDate: "2024-12-30T07:14:01.862Z",
    prority: "3",
    labels: ["4"],
    description:
      "Delectus blanditiis nihil pariatur eum. Ullam in est molestias. Excepturi quos expedita cum possimus.",
    completed: true,
  },
  {
    id: 26,
    title: "consectetur repellendus dolorem",
    assigneeId: 9,
    startDate: "2024-05-01T19:40:29.509Z",
    endDate: "2024-06-26T15:48:20.878Z",
    prority: "3",
    labels: ["4", "4", "3"],
    description:
      "Dolores est enim quisquam aut pariatur voluptas temporibus consequatur eius. Porro aut voluptate. Accusamus dolor delectus et. Cupiditate accusantium adipisci vitae perspiciatis eum beatae ipsa ut.",
    completed: false,
  },
  {
    id: 27,
    title: "fugiat qui sit",
    assigneeId: 2,
    startDate: "2024-05-01T08:16:06.713Z",
    endDate: "2024-11-01T09:16:02.833Z",
    prority: "2",
    labels: ["1", "4", "4"],
    description:
      "Adipisci sint explicabo voluptates eius quaerat at. Iusto quibusdam voluptates consequatur perferendis animi rerum ipsa adipisci id. Quis quia vero voluptas cum eum incidunt natus. Perspiciatis numquam odio. Voluptatem numquam id quis et sunt nihil odit culpa cupiditate. Harum aut nemo officiis non et nulla magni adipisci officia.",
    completed: false,
  },
  {
    id: 28,
    title: "eaque illum nihil",
    assigneeId: 10,
    startDate: "2024-05-01T02:46:31.626Z",
    endDate: "2024-05-26T20:57:54.407Z",
    prority: "1",
    labels: ["1", "3"],
    description:
      "Molestiae vel deserunt aperiam quo nostrum. Neque pariatur reprehenderit ipsum. Dolore ut quo esse voluptas iusto nihil molestiae at. Beatae labore nobis ullam esse est.",
    completed: true,
  },
  {
    id: 29,
    title: "qui iure voluptatem",
    assigneeId: 5,
    startDate: "2024-05-01T06:19:36.474Z",
    endDate: "2025-02-08T07:38:12.166Z",
    prority: "1",
    labels: ["4"],
    description:
      "Quaerat officia et totam a odit ab aut a consequatur. Recusandae tempore sint error consequatur. Dicta repellat dolorem quod hic atque. Aut quo voluptatem quaerat et fugit mollitia eius ipsam ratione.",
    completed: false,
  },
  {
    id: 30,
    title: "aut officiis dolorum",
    assigneeId: 7,
    startDate: "2024-05-01T01:00:35.138Z",
    endDate: "2025-04-04T21:21:56.404Z",
    prority: "3",
    labels: ["4", "1", "3"],
    description:
      "Corporis exercitationem culpa cum voluptatem vero quasi. Delectus sed earum voluptatem earum non rerum earum. Maxime voluptas dicta perspiciatis sunt doloribus similique quia vel molestiae. Dolorem sequi recusandae quaerat quia asperiores.",
    completed: true,
  },
];

export const quizFakeData = [
  {
    id: 1,
    name: "Sciences Générales",
    description: "Testez vos connaissances générales en sciences.",
    date: "2024-05-15",
    concepts: ["Biologie", "Physique", "Chimie"],
    status: "1",
    difficulty: "2",
    questions: [
      {
        id: 1,
        questionText: "Quelle est la formule chimique de l'eau ?",
        answers: [
          { id: 1, answerText: "H2O", isCorrect: true },
          { id: 2, answerText: "O2H" },
          { id: 3, answerText: "HO2" },
        ],
      },
      {
        id: 2,
        questionText: "Quel est l'élément chimique avec le symbole Fe ?",
        answers: [
          { id: 1, answerText: "Fer", isCorrect: true },
          { id: 2, answerText: "Fluor" },
          { id: 3, answerText: "Phosphore" },
        ],
      },
      {
        id: 3,
        questionText: "Quel est le plus grand organe du corps humain ?",
        answers: [
          { id: 1, answerText: "Peau", isCorrect: true },
          { id: 2, answerText: "Foie" },
          { id: 3, answerText: "Poumon" },
        ],
      },
      {
        id: 4,
        questionText: "Quelle est la planète la plus proche du Soleil ?",
        answers: [
          { id: 1, answerText: "Mercure", isCorrect: true },
          { id: 2, answerText: "Venus" },
          { id: 3, answerText: "Terre" },
        ],
      },
      {
        id: 5,
        questionText: "Quel gaz est essentiel pour la respiration humaine ?",
        answers: [
          { id: 1, answerText: "Oxygène", isCorrect: true },
          { id: 2, answerText: "Hydrogène" },
          { id: 3, answerText: "Azote" },
        ],
      },
      {
        id: 6,
        questionText:
          "Quel est l'organe responsable de la production d'insuline ?",
        answers: [
          { id: 1, answerText: "Pancréas", isCorrect: true },
          { id: 2, answerText: "Foie" },
          { id: 3, answerText: "Reins" },
        ],
      },
      {
        id: 7,
        questionText: "Quelle est la vitesse de la lumière dans le vide ?",
        answers: [
          { id: 1, answerText: "300 000 km/s", isCorrect: true },
          { id: 2, answerText: "150 000 km/s" },
          { id: 3, answerText: "450 000 km/s" },
        ],
      },
      {
        id: 8,
        questionText: "Quel est le symbole chimique de l'or ?",
        answers: [
          { id: 1, answerText: "Au", isCorrect: true },
          { id: 2, answerText: "Ag" },
          { id: 3, answerText: "Pb" },
        ],
      },
      {
        id: 9,
        questionText: "Quel est le principal gaz à effet de serre ?",
        answers: [
          { id: 1, answerText: "Dioxyde de carbone", isCorrect: true },
          { id: 2, answerText: "Méthane" },
          { id: 3, answerText: "Ozone" },
        ],
      },
      {
        id: 10,
        questionText: "Quelle est la distance entre la Terre et la Lune ?",
        answers: [
          { id: 1, answerText: "384 400 km", isCorrect: true },
          { id: 2, answerText: "150 000 km" },
          { id: 3, answerText: "500 000 km" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Histoire du Monde",
    description: "Explorez les événements clés de l'histoire mondiale.",
    date: "2024-05-15",
    concepts: ["Ancienne", "Moyen Âge", "Moderne"],
    status: "1",
    difficulty: "2",
    questions: [
      {
        id: 1,
        questionText: "Qui a été le premier président des États-Unis ?",
        answers: [
          { id: 1, answerText: "George Washington", isCorrect: true },
          { id: 2, answerText: "Thomas Jefferson" },
          { id: 3, answerText: "Abraham Lincoln" },
        ],
      },
      {
        id: 2,
        questionText: "Quel empire a construit le Colisée à Rome ?",
        answers: [
          { id: 1, answerText: "Empire Romain", isCorrect: true },
          { id: 2, answerText: "Empire Byzantin" },
          { id: 3, answerText: "Empire Ottoman" },
        ],
      },
      {
        id: 3,
        questionText: "En quelle année a eu lieu la Révolution française ?",
        answers: [
          { id: 1, answerText: "1789", isCorrect: true },
          { id: 2, answerText: "1776" },
          { id: 3, answerText: "1804" },
        ],
      },
      {
        id: 4,
        questionText: "Quel pays a été dirigé par Gengis Khan ?",
        answers: [
          { id: 1, answerText: "Mongolie", isCorrect: true },
          { id: 2, answerText: "Chine" },
          { id: 3, answerText: "Russie" },
        ],
      },
      {
        id: 5,
        questionText: "Quelle ville était la capitale de l'Empire Inca ?",
        answers: [
          { id: 1, answerText: "Cuzco", isCorrect: true },
          { id: 2, answerText: "Machu Picchu" },
          { id: 3, answerText: "Lima" },
        ],
      },
      {
        id: 6,
        questionText: "Quel traité a mis fin à la Première Guerre mondiale ?",
        answers: [
          { id: 1, answerText: "Traité de Versailles", isCorrect: true },
          { id: 2, answerText: "Traité de Paris" },
          { id: 3, answerText: "Traité de Tordesillas" },
        ],
      },
      {
        id: 7,
        questionText: "Qui a découvert l'Amérique en 1492 ?",
        answers: [
          { id: 1, answerText: "Christophe Colomb", isCorrect: true },
          { id: 2, answerText: "Ferdinand Magellan" },
          { id: 3, answerText: "James Cook" },
        ],
      },
      {
        id: 8,
        questionText:
          "Quelle guerre a opposé les États du Nord et du Sud des États-Unis ?",
        answers: [
          { id: 1, answerText: "Guerre de Sécession", isCorrect: true },
          { id: 2, answerText: "Guerre d'Indépendance" },
          { id: 3, answerText: "Guerre du Mexique" },
        ],
      },
      {
        id: 9,
        questionText:
          "Quel pharaon a été découvert dans une tombe presque intacte en 1922 ?",
        answers: [
          { id: 1, answerText: "Toutankhamon", isCorrect: true },
          { id: 2, answerText: "Ramsès II" },
          { id: 3, answerText: "Akhenaton" },
        ],
      },
      {
        id: 10,
        questionText:
          "Quelle ville a été détruite par l'éruption du Vésuve en 79 ap. J.-C. ?",
        answers: [
          { id: 1, answerText: "Pompéi", isCorrect: true },
          { id: 2, answerText: "Herculanum" },
          { id: 3, answerText: "Stabies" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Géographie du Monde",
    description: "Découvrez les merveilles géographiques de notre planète.",
    date: "2024-05-15",
    concepts: ["Continents", "Pays", "Villes"],
    status: "1",
    difficulty: "2",
    questions: [
      {
        id: 1,
        questionText: "Quel est le plus grand désert du monde ?",
        answers: [
          { id: 1, answerText: "Désert du Sahara", isCorrect: true },
          { id: 2, answerText: "Désert de Gobi" },
          { id: 3, answerText: "Désert du Kalahari" },
        ],
      },
      {
        id: 2,
        questionText: "Quelle est la plus longue rivière du monde ?",
        answers: [
          { id: 1, answerText: "Nil", isCorrect: true },
          { id: 2, answerText: "Amazonie" },
          { id: 3, answerText: "Yangtsé" },
        ],
      },
      {
        id: 3,
        questionText: "Quel est le pays le plus peuplé du monde ?",
        answers: [
          { id: 1, answerText: "Chine", isCorrect: true },
          { id: 2, answerText: "Inde" },
          { id: 3, answerText: "États-Unis" },
        ],
      },
      {
        id: 4,
        questionText: "Quelle est la plus haute montagne du monde ?",
        answers: [
          { id: 1, answerText: "Mont Everest", isCorrect: true },
          { id: 2, answerText: "K2" },
          { id: 3, answerText: "Kangchenjunga" },
        ],
      },
      {
        id: 5,
        questionText: "Quel pays est surnommé le pays du Soleil Levant ?",
        answers: [
          { id: 1, answerText: "Japon", isCorrect: true },
          { id: 2, answerText: "Thaïlande" },
          { id: 3, answerText: "Corée du Sud" },
        ],
      },
      {
        id: 6,
        questionText: "Quelle est la capitale de l'Australie ?",
        answers: [
          { id: 1, answerText: "Canberra", isCorrect: true },
          { id: 2, answerText: "Sydney" },
          { id: 3, answerText: "Melbourne" },
        ],
      },
      {
        id: 7,
        questionText: "Quel océan borde la côte est des États-Unis ?",
        answers: [
          { id: 1, answerText: "Océan Atlantique", isCorrect: true },
          { id: 2, answerText: "Océan Pacifique" },
          { id: 3, answerText: "Océan Indien" },
        ],
      },
      {
        id: 8,
        questionText: "Quelle chaîne de montagnes sépare l'Europe de l'Asie ?",
        answers: [
          { id: 1, answerText: "Monts Oural", isCorrect: true },
          { id: 2, answerText: "Alpes" },
          { id: 3, answerText: "Caucase" },
        ],
      },
      {
        id: 9,
        questionText: "Quelle ville est connue sous le nom de Big Apple ?",
        answers: [
          { id: 1, answerText: "New York", isCorrect: true },
          { id: 2, answerText: "Los Angeles" },
          { id: 3, answerText: "Chicago" },
        ],
      },
      {
        id: 10,
        questionText: "Quel pays est traversé par le fleuve Amazone ?",
        answers: [
          { id: 1, answerText: "Brésil", isCorrect: true },
          { id: 2, answerText: "Pérou" },
          { id: 3, answerText: "Colombie" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Littérature Classique",
    description:
      "Testez vos connaissances sur les œuvres littéraires classiques.",
    date: "2024-05-15",
    concepts: ["Romans", "Poésie", "Théâtre"],
    status: "1",
    difficulty: "2",
    questions: [
      {
        id: 1,
        questionText: "Qui a écrit 'Les Misérables' ?",
        answers: [
          { id: 1, answerText: "Victor Hugo", isCorrect: true },
          { id: 2, answerText: "Émile Zola" },
          { id: 3, answerText: "Honoré de Balzac" },
        ],
      },
      {
        id: 2,
        questionText: "Quel est le titre du chef-d'œuvre de Cervantes ?",
        answers: [
          { id: 1, answerText: "Don Quichotte", isCorrect: true },
          { id: 2, answerText: "La Celestina" },
          { id: 3, answerText: "Lazarillo de Tormes" },
        ],
      },
      {
        id: 3,
        questionText:
          "Quelle œuvre est célèbre pour sa phrase 'To be, or not to be' ?",
        answers: [
          { id: 1, answerText: "Hamlet", isCorrect: true },
          { id: 2, answerText: "Macbeth" },
          { id: 3, answerText: "Othello" },
        ],
      },
      {
        id: 4,
        questionText: "Quel est le roman le plus célèbre de Jane Austen ?",
        answers: [
          { id: 1, answerText: "Orgueil et Préjugés", isCorrect: true },
          { id: 2, answerText: "Emma" },
          { id: 3, answerText: "Raison et Sentiments" },
        ],
      },
      {
        id: 5,
        questionText: "Qui a écrit 'Le vieil homme et la mer' ?",
        answers: [
          { id: 1, answerText: "Ernest Hemingway", isCorrect: true },
          { id: 2, answerText: "F. Scott Fitzgerald" },
          { id: 3, answerText: "John Steinbeck" },
        ],
      },
      {
        id: 6,
        questionText: "Qui est l'auteur de '1984' ?",
        answers: [
          { id: 1, answerText: "George Orwell", isCorrect: true },
          { id: 2, answerText: "Aldous Huxley" },
          { id: 3, answerText: "Ray Bradbury" },
        ],
      },
      {
        id: 7,
        questionText: "Quelle œuvre a été écrite par Homère ?",
        answers: [
          { id: 1, answerText: "L'Iliade", isCorrect: true },
          { id: 2, answerText: "L'Énéide" },
          { id: 3, answerText: "La Théogonie" },
        ],
      },
      {
        id: 8,
        questionText: "Quel est le titre original de 'Guerre et Paix' ?",
        answers: [
          { id: 1, answerText: "Voyna i mir", isCorrect: true },
          { id: 2, answerText: "Voyna i Pokoj" },
          { id: 3, answerText: "Voyna i Lyubov" },
        ],
      },
    ],
  },
];
