import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  constructor(private logger: LoggerService) {
    this.movies = [
      new Movie(0, 3000, 6170, '1 h 42 min', '../../assets/images/movies/movie7.webp', '', '', 'Fantastic Beasts and Where to Find Them', 9.0, 2000, 899, 100, '', ''),
      new Movie(1, 3000, 6170, '2 h 12 min', '../../assets/images/movies/movie7.webp', '../../assets/images/movie_details/movie9.webp', '../../assets/images/mivoes_logo_png/m1.png', 'Fantastic Beasts and Where to Find Them', 7.6, 2016, 899, 100, 'Мир Гарри Поттера за полвека до его рождения. Маг-зоолог носит в саквояже целый зоопарк волшебных зверей', 'Практически приквел саги о Гарри Поттере — сюжет разворачивается за 54 года до рождения юного волшебника в очках. Америка «ревущих» 1920-х, «сухой закон», гангстеры, бутлегеры и, конечно, магия. Главная роль у лауреата «Оскара» Эдди Редмэйна, его утвердили без проб. Успех картины дал основания превратить историю во франшизу из пяти частей.'),
      new Movie(2, 1400, 6170, '1 h 48 min', '../../assets/images/movies/movie9.webp', '../../assets/images/movie_details/movie10.webp', '../../assets/images/mivoes_logo_png/m2.png', 'A Dog\'s Purpose 2', 8.0, 2019, 599, 100, 'Пес Бэйли теперь в ответе за внучку любимого хозяина. Продолжение трогательной истории о реинкарнации собаки', 'Главного героя зовут Бэйли, он любит бекон и своего человека Итана. Они прожили вместе много счастливых лет, и вот настала пора прощаться. Но разве он может уйти, когда другу так нужна помощь? Ради Итана он готов на все… даже если в одной из жизней ему придётся стать девчонкой.'),
      new Movie(3, 4988, 6170, '', '../../assets/images/movies/movie2.webp', '../../assets/images/movie_details/movie5.webp', '../../assets/images/mivoes_logo_png/m3.png', 'Supernatural', 8.2, 2005, 600, 100, 'Братья Винчестеры стараются не выпустить демонов. Фантастический сериал, вдохновленный «Сумеречной зоной»', 'Сериал рассказывает о приключениях братьев Сэма и Дина Винчестеров, которые путешествуют по Соединённым Штатам на чёрном автомобиле Chevrolet Impala 1967 года, расследуют паранормальные явления, многие из которых основаны на американских городских легендах и фольклоре, и сражаются с порождениями зла, такими как демоны и призраки.'),
      new Movie(4, 3000, 6170, '', '../../assets/images/movies/movie1.webp', '../../assets/images/movie_details/movie2.webp', '../../assets/images/mivoes_logo_png/m4.png', 'Legacies', 7.5, 2018, 900, 100, 'Фантастический сериал о школе для юных ведьм, вампиров и оборотней. Спин-офф «Первородных»', 'Рассказ о следующем поколении сверхъестественных существ в Школе Сальваторе для молодых и одаренных. Дочь Клауса Майклсона, 17-летняя Хоуп Майклсон; Близнецы Аларика Зальцмана, Лиззи и Джози Зальцман, и другие молодые люди достигли совершеннолетия необычным способом, чтобы стать их лучшими личностями, несмотря на их худшие импульсы. Станут ли эти молодые ведьмы, вампиры и оборотни героями, которы…'),
      new Movie(5, 3000, 6170, '1 h 30 min', '../../assets/images/movies/movie3.webp', '../../assets/images/movie_details/movie4.webp', '../../assets/images/mivoes_logo_png/m5.png', 'Midnight in Paris', 7.7, 2011, 799, 100, 'Вуди Аллен отправляется в начало века', 'Очаровательная комедия Вуди Аллена рассказывает о сценаристе Гиле (Оуэн Уилсон). Вместе с невестой Инес (Рейчел МакАдамс) он приезжает в Париж и случайно находит возможность перемещаться во времени. Марион Котийяр в роли Адрианы, Эдриан Броуди в роли Сальвадора Дали и Карла Бруни как экскурсовод – лишь часть звезд, снявшихся в фильме. За его сценарий Вуди Аллен был награжден премией «Оскар».'),
      new Movie(6, 3000, 6170, '2 h 32 min', '../../assets/images/movies/movie4.webp', '../../assets/images/movie_details/movie3.webp', '../../assets/images/mivoes_logo_png/m6.png',  'Гарри Поттер и философский камень', 8.2, 2001, 100, 100, 'Первая часть большой франшизы о маленьком волшебнике. Гарри поступает в школу магии Хогвартс и заводит друзей', 'Жизнь десятилетнего Гарри Поттера не назвать сладкой: родители умерли, а от дяди и тёти, взявших его на воспитание, достаются лишь тычки. Но в одиннадцатый день рождения мальчика всё меняется. Гарри получает письмо, из которого узнаёт, что на самом деле он волшебник и принят в школу магии Хогвартс. В новой жизни его ждут невероятные приключения, верные друзья и ключ к тайне смерти родителей.'),
      new Movie(7, 3000, 6170, '2 h 10 min', '../../assets/images/movies/movie5.webp', '../../assets/images/movie_details/movie11.webp', '../../assets/images/mivoes_logo_png/m7.png',  'Harry Potter and the Deathly Hallows: Part 2', 8.1, 2011, 100, 100, 'В мире магии идет война, последнее сражение Гарри и Волан-де-Морта неизбежно приближается. Финал поттерианы', 'В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища – столь сложен. И быть может именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом. Способен ли наш герой спасти мир? И всё закончится здесь.'),
      new Movie(8, 3000, 6170, '2 h 1 min', '../../assets/images/movies/movie6.webp', '../../assets/images/movie_details/movie12.webp', '../../assets/images/mivoes_logo_png/m8.png',  'Miss Peregrine\'s Home for Peculiar Children', 6.8, 2016, 100, 100, 'Мальчик ищет старый дом, о котором много слышал от деда. Недетское фэнтези Тима Бертона с Евой Грин', 'Мрачноватая сказка с долей романтики от Тима Бёртона, где Ева Грин появляется с птичьими крыльями, а Сэмюэл Л. Джексон – со страшными белыми глазами. Девочка с челюстями на затылке, мальчик, в животе которого живет пчелиный рой – фантазия авторов впечатляет. Что произойдет, если в мир удивительных существ попадет обычный подросток Джейкоб?'),
      new Movie(9, 3000, 6170, '1 h 33 min', '../../assets/images/movies/movie8.webp', '../../assets/images/movie_details/movie13.webp', '../../assets/images/mivoes_logo_png/m9.png',  'Maleficent', 7.2, 2014, 100, 100, 'Сказка о спящей красавице с эффектными костюмами, магическими артефактами, Анджелиной Джоли и Эль Фаннинг', 'В сказочном блокбастере «Малефисента» на сказку Шарля Перро о Спящей красавице смотрят по-новому. Теперь история рассказывается от лица злой ведьмы. Для Анджелины Джоли картина до сих пор остается самым успешным фильмом. Сборы превысили $705 млн. Костюмер Анна Шепард за эту картину в третий раз номинировалась на «Оскар».'),
      new Movie(10, 3000, 6170, '1 h 59 min', '../../assets/images/movies/movie10.webp', '../../assets/images/movie_details/movie14.webp', '../../assets/images/mivoes_logo_png/m10.png',  'Jumanji: Welcome to the Jungle', 6.8, 2017, 100, 100, 'Четверо подростков оказываются в смертельно опасном мире видеоигры, да еще у каждого — новое непривычное тело', 'Сиквел популярного в 90-х фэнтези «Джуманджи». Теперь юные герои попадают не в настольную игру с экзотическими животными, а в компьютерную. Особенно выделяются внушительный Дуэйн Джонсон и забавный Джек Блэк, изображающий школьницу-чирлидершу. Картина посвящена покойному Робину Уильямсу — его героя из приквела Алана Пэрриша здесь вспоминают с уважением.'),
      new Movie(11, 3000, 6170, '1 h 42 min', '../../assets/images/movies/movie11.webp', '../../assets/images/movie_details/movie15.webp', '../../assets/images/mivoes_logo_png/m11.png',  'Sora no Aosa o Shiru Hito yo', 7.5, 2019, 100, 100, 'Аои влюбляется в бывшего парня сестры, прибывшего из прошлого. Аниме о первой любви, которая случилась дважды', 'Родители Аои и Аканэ погибли 13 лет назад, и, чтобы заботиться о младшей сестре, Аканэ пришлось отказаться от планов переехать в Токио вместе со своим парнем Синносукэ. С тех пор Аои чувствует себя в долгу перед сестрой. Однажды известный исполнитель песен в жанре энка по имени Данкити приглашает Аои, только делающую первые шаги на музыкальном поприще, выступить на фестивале. В то же время Синнос…'),
      new Movie(12, 3000, 6170, '1 h 48 min', '../../assets/images/movies/movie12.webp', '../../assets/images/movie_details/movie1.webp', '../../assets/images/mivoes_logo_png/orig.png', 'The Gentlemen', 8.5, 2019, 900, 100, 'Успешное возвращение Гая Ричи к корням — острая и живая криминальная комедия с блестящим актерским составом', 'Ушлый наркоторговец придумал схему нелегального обогащения — с использованием поместий обедневшей английской аристократии. На успешный бизнес заглядываются партнер-еврей, китайская диаспора, темнокожие спортсмены и русский олигарх.'),
      new Movie(13, 3000, 6170, '2 h 4 min', '../../assets/images/movies/movie13.webp', '../../assets/images/movie_details/movie6.webp', '../../assets/images/mivoes_logo_png/m12.png', 'Knives Out', 7.9, 2019, 699, 100, 'Остроумный детектив в духе Агаты Кристи, населенный нетипичными персонажами и вывернутый наизнанку', 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мертвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование …'),
      new Movie(14, 3000, 6170, '', '../../assets/images/movies/movie14.webp', '../../assets/images/movie_details/movie7.webp', '../../assets/images/mivoes_logo_png/m13.png', 'Rick and Morty', 8.9, 2013, 799, 100, 'Смешные и изобретательные приключения безумного гения и его внука. В озвучке Сыендука', 'В центре сюжета - школьник по имени Морти и его дедушка Рик. Морти - самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в межпространственные приключения с помощью построенной из разного хлама летающей та…'),
      new Movie(15, 3000, 6170, '', '../../assets/images/movies/movie15.webp', '../../assets/images/movie_details/movie8.webp', '../../assets/images/mivoes_logo_png/m14.png', 'Gravity Falls', 8.9, 2012, 699, 100, 'Жуткие и невероятные каникулы близнецов Диппера и Мейбл в гостях у прадядюшки Стэна', 'История рассказывает о приключениях близнецов, брата и сестры Диппера и Мэйбл Пайнс, чьи летние планы отправляются в чулан, когда родители оправляют их к дальнему родственнику в тихий городок Гравити Фолз. Но так ли прост этот город, родственник и жители, и какие тайны ждут своих первооткрывателей?'),
      new Movie(101, 3000, 6170, '2 h 12 min', '../../assets/images/movies/movie7.webp', '../../assets/images/movie_details/movie9.webp', '../../assets/images/mivoes_logo_png/m1.png', 'Fantastic Beasts and Where to Find Them', 7.6, 2016, 899, 90, 'Мир Гарри Поттера за полвека до его рождения. Маг-зоолог носит в саквояже целый зоопарк волшебных зверей', 'Практически приквел саги о Гарри Поттере — сюжет разворачивается за 54 года до рождения юного волшебника в очках. Америка «ревущих» 1920-х, «сухой закон», гангстеры, бутлегеры и, конечно, магия. Главная роль у лауреата «Оскара» Эдди Редмэйна, его утвердили без проб. Успех картины дал основания превратить историю во франшизу из пяти частей.'),
      new Movie(102, 1400, 6170, '1 h 48 min', '../../assets/images/movies/movie9.webp', '../../assets/images/movie_details/movie10.webp', '../../assets/images/mivoes_logo_png/m2.png', 'A Dog\'s Purpose 2', 8.0, 2019, 599, 90, 'Пес Бэйли теперь в ответе за внучку любимого хозяина. Продолжение трогательной истории о реинкарнации собаки', 'Главного героя зовут Бэйли, он любит бекон и своего человека Итана. Они прожили вместе много счастливых лет, и вот настала пора прощаться. Но разве он может уйти, когда другу так нужна помощь? Ради Итана он готов на все… даже если в одной из жизней ему придётся стать девчонкой.'),
      new Movie(103, 4988, 6170, '', '../../assets/images/movies/movie2.webp', '../../assets/images/movie_details/movie5.webp', '../../assets/images/mivoes_logo_png/m3.png', 'Supernatural', 8.2, 2005, 600, 90, 'Братья Винчестеры стараются не выпустить демонов. Фантастический сериал, вдохновленный «Сумеречной зоной»', 'Сериал рассказывает о приключениях братьев Сэма и Дина Винчестеров, которые путешествуют по Соединённым Штатам на чёрном автомобиле Chevrolet Impala 1967 года, расследуют паранормальные явления, многие из которых основаны на американских городских легендах и фольклоре, и сражаются с порождениями зла, такими как демоны и призраки.'),
      new Movie(104, 3000, 6170, '', '../../assets/images/movies/movie1.webp', '../../assets/images/movie_details/movie2.webp', '../../assets/images/mivoes_logo_png/m4.png', 'Legacies', 7.5, 2018, 900, 90, 'Фантастический сериал о школе для юных ведьм, вампиров и оборотней. Спин-офф «Первородных»', 'Рассказ о следующем поколении сверхъестественных существ в Школе Сальваторе для молодых и одаренных. Дочь Клауса Майклсона, 17-летняя Хоуп Майклсон; Близнецы Аларика Зальцмана, Лиззи и Джози Зальцман, и другие молодые люди достигли совершеннолетия необычным способом, чтобы стать их лучшими личностями, несмотря на их худшие импульсы. Станут ли эти молодые ведьмы, вампиры и оборотни героями, которы…'),
      new Movie(105, 3000, 6170, '1 h 30 min', '../../assets/images/movies/movie3.webp', '../../assets/images/movie_details/movie4.webp', '../../assets/images/mivoes_logo_png/m5.png', 'Midnight in Paris', 7.7, 2011, 799, 90, 'Вуди Аллен отправляется в начало века', 'Очаровательная комедия Вуди Аллена рассказывает о сценаристе Гиле (Оуэн Уилсон). Вместе с невестой Инес (Рейчел МакАдамс) он приезжает в Париж и случайно находит возможность перемещаться во времени. Марион Котийяр в роли Адрианы, Эдриан Броуди в роли Сальвадора Дали и Карла Бруни как экскурсовод – лишь часть звезд, снявшихся в фильме. За его сценарий Вуди Аллен был награжден премией «Оскар».'),
      new Movie(106, 3000, 6170, '2 h 32 min', '../../assets/images/movies/movie4.webp', '../../assets/images/movie_details/movie3.webp', '../../assets/images/mivoes_logo_png/m6.png',  'Гарри Поттер и философский камень', 8.2, 2001, 100, 90, 'Первая часть большой франшизы о маленьком волшебнике. Гарри поступает в школу магии Хогвартс и заводит друзей', 'Жизнь десятилетнего Гарри Поттера не назвать сладкой: родители умерли, а от дяди и тёти, взявших его на воспитание, достаются лишь тычки. Но в одиннадцатый день рождения мальчика всё меняется. Гарри получает письмо, из которого узнаёт, что на самом деле он волшебник и принят в школу магии Хогвартс. В новой жизни его ждут невероятные приключения, верные друзья и ключ к тайне смерти родителей.'),
      new Movie(107, 3000, 6170, '2 h 10 min', '../../assets/images/movies/movie5.webp', '../../assets/images/movie_details/movie11.webp', '../../assets/images/mivoes_logo_png/m7.png',  'Harry Potter and the Deathly Hallows: Part 2', 8.1, 2011, 100, 90, 'В мире магии идет война, последнее сражение Гарри и Волан-де-Морта неизбежно приближается. Финал поттерианы', 'В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища – столь сложен. И быть может именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом. Способен ли наш герой спасти мир? И всё закончится здесь.'),
      new Movie(108, 3000, 6170, '2 h 1 min', '../../assets/images/movies/movie6.webp', '../../assets/images/movie_details/movie12.webp', '../../assets/images/mivoes_logo_png/m8.png',  'Miss Peregrine\'s Home for Peculiar Children', 6.8, 2016, 100, 90, 'Мальчик ищет старый дом, о котором много слышал от деда. Недетское фэнтези Тима Бертона с Евой Грин', 'Мрачноватая сказка с долей романтики от Тима Бёртона, где Ева Грин появляется с птичьими крыльями, а Сэмюэл Л. Джексон – со страшными белыми глазами. Девочка с челюстями на затылке, мальчик, в животе которого живет пчелиный рой – фантазия авторов впечатляет. Что произойдет, если в мир удивительных существ попадет обычный подросток Джейкоб?'),
      new Movie(109, 3000, 6170, '1 h 33 min', '../../assets/images/movies/movie8.webp', '../../assets/images/movie_details/movie13.webp', '../../assets/images/mivoes_logo_png/m9.png',  'Maleficent', 7.2, 2014, 100, 90, 'Сказка о спящей красавице с эффектными костюмами, магическими артефактами, Анджелиной Джоли и Эль Фаннинг', 'В сказочном блокбастере «Малефисента» на сказку Шарля Перро о Спящей красавице смотрят по-новому. Теперь история рассказывается от лица злой ведьмы. Для Анджелины Джоли картина до сих пор остается самым успешным фильмом. Сборы превысили $705 млн. Костюмер Анна Шепард за эту картину в третий раз номинировалась на «Оскар».'),
      new Movie(110, 3000, 6170, '1 h 59 min', '../../assets/images/movies/movie10.webp', '../../assets/images/movie_details/movie14.webp', '../../assets/images/mivoes_logo_png/m10.png',  'Jumanji: Welcome to the Jungle', 6.8, 2017, 100, 90, 'Четверо подростков оказываются в смертельно опасном мире видеоигры, да еще у каждого — новое непривычное тело', 'Сиквел популярного в 90-х фэнтези «Джуманджи». Теперь юные герои попадают не в настольную игру с экзотическими животными, а в компьютерную. Особенно выделяются внушительный Дуэйн Джонсон и забавный Джек Блэк, изображающий школьницу-чирлидершу. Картина посвящена покойному Робину Уильямсу — его героя из приквела Алана Пэрриша здесь вспоминают с уважением.'),
      new Movie(110, 3000, 6170, '1 h 42 min', '../../assets/images/movies/movie11.webp', '../../assets/images/movie_details/movie15.webp', '../../assets/images/mivoes_logo_png/m11.png',  'Sora no Aosa o Shiru Hito yo', 7.5, 2019, 100, 90, 'Аои влюбляется в бывшего парня сестры, прибывшего из прошлого. Аниме о первой любви, которая случилась дважды', 'Родители Аои и Аканэ погибли 13 лет назад, и, чтобы заботиться о младшей сестре, Аканэ пришлось отказаться от планов переехать в Токио вместе со своим парнем Синносукэ. С тех пор Аои чувствует себя в долгу перед сестрой. Однажды известный исполнитель песен в жанре энка по имени Данкити приглашает Аои, только делающую первые шаги на музыкальном поприще, выступить на фестивале. В то же время Синнос…'),
      new Movie(111, 3000, 6170, '1 h 48 min', '../../assets/images/movies/movie12.webp', '../../assets/images/movie_details/movie1.webp', '../../assets/images/mivoes_logo_png/orig.png', 'The Gentlemen', 8.5, 2019, 900, 90, 'Успешное возвращение Гая Ричи к корням — острая и живая криминальная комедия с блестящим актерским составом', 'Ушлый наркоторговец придумал схему нелегального обогащения — с использованием поместий обедневшей английской аристократии. На успешный бизнес заглядываются партнер-еврей, китайская диаспора, темнокожие спортсмены и русский олигарх.'),
      new Movie(112, 3000, 6170, '2 h 4 min', '../../assets/images/movies/movie13.webp', '../../assets/images/movie_details/movie6.webp', '../../assets/images/mivoes_logo_png/m12.png', 'Knives Out', 7.9, 2019, 699, 90, 'Остроумный детектив в духе Агаты Кристи, населенный нетипичными персонажами и вывернутый наизнанку', 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мертвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование …'),
      new Movie(113, 3000, 6170, '', '../../assets/images/movies/movie14.webp', '../../assets/images/movie_details/movie7.webp', '../../assets/images/mivoes_logo_png/m13.png', 'Rick and Morty', 8.9, 2013, 799, 90, 'Смешные и изобретательные приключения безумного гения и его внука. В озвучке Сыендука', 'В центре сюжета - школьник по имени Морти и его дедушка Рик. Морти - самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в межпространственные приключения с помощью построенной из разного хлама летающей та…'),
      new Movie(114, 3000, 6170, '', '../../assets/images/movies/movie15.webp', '../../assets/images/movie_details/movie8.webp', '../../assets/images/mivoes_logo_png/m14.png', 'Gravity Falls', 8.9, 2012, 699, 90, 'Жуткие и невероятные каникулы близнецов Диппера и Мейбл в гостях у прадядюшки Стэна', 'История рассказывает о приключениях близнецов, брата и сестры Диппера и Мэйбл Пайнс, чьи летние планы отправляются в чулан, когда родители оправляют их к дальнему родственнику в тихий городок Гравити Фолз. Но так ли прост этот город, родственник и жители, и какие тайны ждут своих первооткрывателей?')
    ];
  }

  getMovies(): Movie[] {
    this.logger.log('Getting movies.[MovieService]');
    return this.movies;
  }

  doSliceMoviesArr(start: number, end: number) {
    this.logger.log('Doing splice, getting movies start index ' + start + ' and end index ' + end + ' in array movies.[MovieService]');
    return this.movies.slice(start, end);
  }

  getMovieById(id: number): Movie {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === id) {
        return this.movies[i];
      }
    }
  }

  getMoviesById(moviesId: number[]): Movie[] {
    let movies: Movie[] = [];

    for (let id of moviesId) {
      movies.push(this.getMovieById(id));
    }

    return movies;
  }
}
