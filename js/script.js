// Set Events and Locations
var coords = [ { date: new Date("1677"), 
			 title: "An Elephant?",
			 lat:51.75, lng:-1.28,
			 infoWin:   /* Header ----*/   "<h2>Oxfordshire Co, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1677.jpg' />"
						/* Paragraphs */ + "<p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology. Dinosaurs roamed the local landscape from the middle and upper parts of the Jurassic period, between 170 and 150 million years ago.</p>" + "<p>The earliest account we have a proper record of is in Robert Plot's Natural History of Oxfordshire that was published in 1677, and in that he illustrated what we would now recognise as the end of a dinosaur limb bone.</p>" + "<p>Because he knew elephants had come across to Britain during the Roman invasions, he concluded that that was a possible explanation of the object.</p>" + "<p>The bones were identified much later as a Megalosaurus bucklandii.</p>" + "<p>Megalosaurus was the first dinosaur ever described scientifically and first theropod dinosaur discovered (this is all in hindsight, because the dinosaurs had not yet been recognized as a separate taxonomic group - the word dinosaur hadn't even been invented yet).</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from dinosaurs.wikia.com
		   },
		   { date: new Date("1787"), 
			 title: "First US Fossil", 
			 lat:39.837907, lng:-75.15153,
			 infoWin:   /* Header ----*/   "<h2>Woodbury, New Jersey</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1787.jpg' />"
						/* Paragraphs */ + "<p>The earliest documented dinosaur bones discovered in North America... In 1787, a large thighbone -- perhaps a dinosaur limb -- was found near Woodbury Creek, Gloucester County, New Jersey, in what are now known to be Late Cretaceous strata. It was reported to the American Philosophical Society on October 5 by Dr. Caspar Wistar (1761-1818) and Timothy Matlack. It has since been lost.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nj.com/gloucester-county/towns/index.ssf/2012/04/whats_in_a_name_stewart_park_a.html, taken by Kelly Roncace
		   },
		   { date: new Date("1802"), 
			 title: "Noah's Raven", 
			 lat:42.258333, lng:-72.575,
			 infoWin:   /* Header ----*/   "<h2>South Hadley, Mass.</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1802.jpg' />"
						/* Paragraphs */ + "<p>In 1802, Pliny Moody unearthed a stone slab that had strange markings, speculated to be the tracks of Noah's raven. In the 1830's, Edward Hitchcock of Amherst College, declared them to be the tracks of ancient birds, not the tracks of Noah’s raven. After much time scientists revisited the ancient “bird tracks” and declared them to be the tracks of dinosaurs.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nashdinosaurtracks.com/nash-dinosaur-story.php
		   },
		   { date: new Date("1806"), 
			 title: "Lewis & Clark", 
			 lat:45.995278, lng:-108.005833,
			 infoWin:   /* Header ----*/   "<h2>Pompy's Tower, Mont.</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1806.jpg' />"
						/* Paragraphs */ + "<p>In the course of his exploratory expedition through the recently acquired Louisiana Purchase with Meriwether Lewis in 1806, Clark noted a large rib bone in a cliff on the south bank of the YellowstoneRiver, about 6 or 7 miles below Pompy's Tower (now Pompy's Pillar) close to what would be the site of Billings, Montana. In his journal, Clark noted it as being 3 feet in length, though part of the end was broken off, and about 3 inches in circumference. He thought it to be the bone of an immense fish.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://lewisandclarktoday.net/7/images/pompeys_pillar_255.jpg
		   },
		   { date: new Date("1822"), 
			 title: "Honey, I found a tooth!", 
			 lat:51, lng:0,
			 infoWin:   /* Header ----*/   "<h2>Sussex Co, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1822.jpg' />"
						/* Paragraphs */ + "<p>Mary Mantell unearthed the teeth as she pulled at loose fragments of rock in Sussex. Gideon Mantell, an amateur palaeontologist, noticed they were similar to modern iguana teeth, but many times larger. Gideon had the imagination to suggest they belonged to a colossal ancient plant-eating lizard, which he named Iguanodon.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nhm.ac.uk/nature-online/collections-at-the-museum/museum-treasures/iguanodon-teeth/
		   },
		   { date: new Date("1833"), 
			 title: "Third Dinosaur Ever-Named", 
			 lat:51.1045, lng:-0.1779,
			 infoWin:   /* Header ----*/   "<h2>Tulgate Forest, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1833.jpg' />"
						/* Paragraphs */ + "<p>Further remains from Europe have been attributed to the genus,‭ ‬but many of these are now considered to be from other generations.‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nhm.ac.uk/nature-online/life/dinosaurs-other-extinct-creatures/dino-directory/hylaeosaurus.html
		   }, 
		   { date: new Date("1834"), 
			 title: "Plateosaurus", 
			 lat:49.45, lng:11.083333,
			 infoWin:   /* Header ----*/   "<h2>Nuremberg, Germany</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1834-1.jpg' />"
						/* Paragraphs */ + "<p>The first fossils of Plateosaurus were discovered in a Trossingen Formation clay pit about 2 km South of Heroldsberg, Feuerletten, NE Nuremberg, Bavaria, Germany by chemistry teacher Dr. Johann Friedrich Philipp Engelhardt in the summer of 1834.</p>" + "<p>The name Plateosaurus is shrouded in mystery because the original author didn't provide a meaning for what he had in mind. It has been variously decribed as stemming from the Greek plata (flat), platy (paddle), and plateia (broadway), with some sources going so far as suggesting they all allude to its broad teeth... which were unknown at the time it was named! Plateosaurus is probably derived from the Greek platos (breadth, width, bulk) and the Greek sauros (lizard), based on the size of its original remains. </p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.palaeocritti.com/by-group/dinosauria/sauropoda/plateosaurus
		   },
		   { date: new Date("1834"),
			 title: "Thecodont-a-what?", 
			 lat:51.45, lng:-2.583333,
			 infoWin:   /* Header ----*/   "<h2>Bristol, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1834-2.jpg' />"
						/* Paragraphs */ + "<p>Thecodontosaurus antiquus is a very primitive English non-sauropod sauropodomorph, so ancient it's positively antique. Unfortunately, age counts for nothing during the throes of war and when the Luftwaffe bombed Bristol for the umpteenth time during WWII, despite cunning Mendip Hill's decoys, it was presumed blown to hell and gone, along with the museum in which it was stored. But you can't keep a good sauropodomorph down. Many of its remains were actually salvaged, though its holotype jaw wasn't among them, and it became the fifth dinosaur to be identified as such (behind Megalosaurus, Iguanodon, Streptospondylus and Hylaeosaurus) and the first sauropodomorph to be scientifically described, though Owen didn't actually coin Dinosauria until seven years after its discovery and it was thought to be a member of Squamata until Thomas Huxley realised its dinosaurian affinities in 1870.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nenature.com/Dinosaurs/Thecodontosaurus.htm
		   },
		   { date: new Date("1842"), 
			 title: "Dinosauria", 
			 lat:54.047, lng:-2.801,
			 infoWin:   /* Header ----*/   "<h2>Lancaster, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1842.jpg' />"
						/* Paragraphs */ + "<p>Sir Richard Owen (1804-1892) was a pioneering British comparative anatomist who coined the term dinosauria (from the Greek deinos meaning terrible, and sauros meaning lizard), recognizing them as a suborder of large, extinct reptiles in 1842. He proposed this new name in a 1842 article published in the Report of the British Association for the Advancement of Science.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://from-bedroom-to-study.blogspot.com/2012/08/the-dastardly-doings-of.html
		   },
		   { date: new Date("1858"), 
			 title: "First Dinosaur Intact", 
			 lat:39.895437, lng:-75.034294,
			 infoWin:   /* Header ----*/   "<h2>Haddenfield ,NJ</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1858.jpg' />"
						/* Paragraphs */ + "<p>Hadrosaurus  is a valid genus of hadrosaurid dinosaur. In 1858, the only known skeleton was discovered, representing the first dinosaur species known from more than isolated teeth to be identified in North America. In 1868, it became the first ever mounted dinosaur skeleton. Hadrosaurus foulkii is the only species in this genus and has been the official state dinosaur of New Jersey, United States since 1991.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://upload.wikimedia.org/wikipedia/commons/2/2a/Hadrosaurus_reconstruction.jpg
		   },
		   { date: new Date("1877"), 
			 title: "Camarasaurus", 
			 lat:39.651667, lng:-105.190278,
			 infoWin:   /* Header ----*/   "<h2>Morrison, Colorado</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1877-1.jpg' />"
						/* Paragraphs */ + "<p>Camarasaurus meaning chambered lizard, referring to the hollow chambers in its vertebrae, was a genus of quadrupedal, herbivorous dinosaurs. It was the most common of the giant sauropods to be found in North America. Its fossil remains have been found in the Morrison Formation of Colorado and Utah, dating to the late Jurassic Period (late Oxfordian to Tithonian stages), between 155 and 145 million years ago.</p>" + "<p>The first record of Camarasaurus comes from 1877, when a few scattered vertebrae were located in Colorado, by Oramel W. Lucas. The paleontologist Edward Drinker Cope paid for the bones, as part of his long-running and acrimonious competition with Othniel Charles Marsh (known as the Bone Wars) and named them in the same year. Marsh later named some of his sauropod findings Morosaurus grandis but most paleontologists today consider this to be a species of Camarasaurus. Such naming conflicts were common between the two rival dinosaur hunters, the most famous being Brontosaurus/Apatosaurus.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Camarasaurus#mediaviewer/File:MUJA-Sauropod.JPG
		   },
		   { date: new Date("1877"), 
			 title: "Diplodocus", 
			 lat:38.446667, lng:-105.228333,
			 infoWin:   /* Header ----*/   "<h2>Canon City, Colorado</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1877-2.jpg' />"
						/* Paragraphs */ + "<p>Diplodocus (/dɪˈplɒdəkəs/,[1][2] /daɪˈplɒdəkəs/,[2] or /ˌdɪploʊˈdoʊkəs/[1]) is an extinct genus of diplodocid sauropod dinosaur whose fossils were first discovered in 1877 by S. W. Williston. The generic name, coined by Othniel Charles Marsh in 1878, is a Neo-Latin term derived from Greek διπλός (diplos) double and δοκός (dokos) beam, in reference to its double-beamed chevron bones located in the underside of the tail. These bones were initially believed to be unique to Diplodocus; however, they have since then been discovered in other members of the diplodocid family and in non-diplodocid sauropods such as Mamenchisaurus.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://creationwiki.org/pool/images/thumb/1/11/Diplodocus.jpg/800px-Diplodocus.jpg
		   },
		   { date: new Date("1877"), 
			 title: "Stegosaurus", 
			 lat:39.651667, lng:-105.190278,
			 infoWin:   /* Header ----*/   "<h2>Morrison, Colorado</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1877-3.jpg' />"
						/* Paragraphs */ + "<p>Stegosaurus, one of the many dinosaurs first collected and described in the Bone Wars, was originally named by Othniel Charles Marsh in 1877, from remains recovered north of Morrison, Colorado. These first bones became the holotype of Stegosaurus armatus. Marsh initially believed the remains were from an aquatic turtle-like animal, and the basis for its scientific name, 'roof(ed) lizard' was due to his early belief that the plates lay flat over the animal's back, overlapping like the shingles (tiles) on a roof. A wealth of Stegosaurus material was recovered over the next few years and Marsh published several papers on the genus. Initially, several species were described. However, many of these have since been considered to be invalid or synonymous with existing species, leaving two well-known and one poorly known species. Confirmed Stegosaurus remains have been found in the Morrison Formation's stratigraphic zones 2–6, with additional remains possibly referrable to Stegosaurus recovered from stratigraphic zone.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Stegosaurus#mediaviewer/File:Stegosaurus_Senckenberg.jpg
		   },
		   { date: new Date("1877"), 
			 title: "Atlantosaurus",  
			 lat:39.651667, lng:-105.190278,
			 infoWin:   /* Header ----*/   "<h2>Morrison, Colorado</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1877-4.jpg' />"
						/* Paragraphs */ + "<p>Atlantosaurus (meaning Atlas lizard) is a dubious genus of sauropod dinosaur. The type specimen, found by Arthur Lakes in the Morrison Formation of Colorado, USA, was described by Othniel Charles Marsh, a Professor of Paleontology at Yale University (then called Yale College), in 1877 as Titanosaurus montanus. Marsh soon learned that the name Titanosaurus had already been used earlier that year to describe a different sauropod, so he renamed it Atlantosaurus montanus. The skeletal remains discovered were initially distinguished by their immense size and by the pleurocoels (air-filled pockets) in the vertebrae. However, since the time of its discovery, these features have been found to be widespread among sauropods, making it nearly impossible to distinguish the two known vertebrae of Atlantosaurus from those of its relatives. Since it is unclear whether or not Atlantosaurus montanus actually represents a distinct species, it is considered a nomen dubium (dubious name). Some researchers consider it a likely synonym of Apatosaurus ajax.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Atlantosaurus#mediaviewer/File:Flammarion_atlantosaurus.jpg
		   },
		   { date: new Date("1878"), 
			 title: "Bernissart Iguanodon", 
			 lat:50.483333, lng:3.65,
			 infoWin:   /* Header ----*/   "<h2>Bernissart, Belgium</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1878.jpg' />"
						/* Paragraphs */ + "<p>In 1879, fourteen complete skeletons of iguandontids were recovered, 39 skeletons of the herbivorous dinosaur were discovered in a coal mine by Jules Creteur and his workmates. Two different species were discovered, the smaller I. mantelli that was well known from the Weald, and a new, larger species, I. bernissartensis. One conclusion was inescapable--after decades of debate over whether Iguanodon was bipedal or quadrupedal, the Bernissart specimens confirmed that Iguanodon was bipedal, and Dollo had it restored with a very upright posture.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from ... 
		   },
		   { date: new Date("1879"), 
			 title: "The Brontosaurus Controversy", 
			 lat:41.916111, lng:-106.064167,
			 infoWin:   /* Header ----*/   "<h2>Como Bluff, Wyoming</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1879-1.jpg' />"
						/* Paragraphs */ + "<p>Othniel Charles Marsh, a Professor of Paleontology at Yale University, described and named an incomplete (and juvenile) skeleton of Apatosaurus ajax in 1877. Two years later, Marsh announced the discovery of a larger and more complete specimen at Como Bluff Wyoming—which, because of discrepancies including the size difference, Marsh incorrectly identified as belonging to an entirely new genus and species. He named the new species Brontosaurus excelsus, meaning thunder lizard, from the Greek brontē/βροντη meaning thunder and sauros meaning lizard, and from the Latin excelsus, highest, sublime, referring to the greater number of sacral vertebrae than in any other genus of sauropod known at the time.</p>" + "<p>The finds—the largest dinosaur ever discovered at the time and nearly complete, lacking only a head, feet, and portions of the tail—were then prepared for what was to be the first mounted display of a sauropod skeleton, at Yale's Peabody Museum of Natural History in 1905. The missing bones were created using known pieces from close relatives of Brontosaurus. Sauropod feet that were discovered at the same quarry were added, as well as a tail fashioned to appear as Marsh believed it should, as well as a composite model of what he felt the skull of this massive creature might look like. This was not a delicate Diplodocus-style skull (which would later turn out to be more accurate), but was composed of the biggest, thickest, strongest skull bones, lower jaws and tooth crowns from three different quarries, primarily those of Camarasaurus, the only other sauropod for which good skull material was known at the time. This method of reconstructing incomplete skeletons based on the more complete remains of related dinosaurs continues in museum mounts and life restorations to this day. In 1979, two Carnegie researchers replaced the skull on the museum's skeleton with the correct head found in a quarry in Utah in 1910.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from ... 
		   },
		   { date: new Date("1879"), 
			 title: "Allosaurus", 
			 lat:41.916111, lng:-106.064167,
			 infoWin:   /* Header ----*/   "<h2>Como Bluff, Wyoming</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1879-2.jpg' />"
						/* Paragraphs */ + "<p>Almost complete skeleton (up to now 37 have been found; only 13 were more than 25% complete; of those, only three complete skulls have been found)</p>" + "<p>Allosaurus skeleton was discovered in the Como Bluff area of Wyoming, in 1879. The fossils were packed up and sent to the American Museum of Natural History in New York City, where it remained in storage until 1903. In 1903 the remains were unpacked and the identity of the dinosaur became known.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.sciencebuzz.org/blog/discovery-como-bluff-wyomings-rich-and-historic-dinosaur
		   },
		   { date: new Date("1887"), 
			 title: "The First Ceratopidae", 
			 lat:39.739167, lng:-104.984722,
			 infoWin:   /* Header ----*/   "<h2>Denver, Colorado</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1887.jpg' />"
						/* Paragraphs */ + "<p>The first pieces of a ceratopsid to be discovered were a pair of large supraorbital horns found in 1887 in the Denver Formation of Colorado. Having never seen a horned dinosaur before, Marsh named this incomplete specimen Bison alticornis, thinking such large horns must have comes from an extinct bison.  Soon complete ceratopsid skulls were found in Wyoming, and realizing his mistake, Marsh renamed his first specimen Triceratops alticornis.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image screenshot from http://www.youtube.com/watch?v=n6H6zQsUpRI
		   },
		   { date: new Date("1884"), 
			 title: "Albertosaurus", 
			 lat:50.92315, lng:-109.89493,
			 infoWin:   /* Header ----*/   "<h2>Red Deer River, Canada</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1884.jpg' />"
						/* Paragraphs */ + "<p>Albertosaurus (meaning Alberta lizard) is a genus of tyrannosaurid theropod dinosaur that lived in western North America during the Late Cretaceous Period, about 70 million years ago. The type species, A. sarcophagus, was apparently restricted in range to the modern-day Canadian province of Alberta, after which the genus is named. Scientists disagree on the content of the genus, with some recognizing Gorgosaurus libratus as a second species.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Albertosaurus#mediaviewer/File:Albertosaurus.jpg
		   },
		   { date: new Date("1898"), 
			 title: "Chasmosaurus", 
			 lat:50.92315, lng:-109.89493,
			 infoWin:   /* Header ----*/   "<h2>Red Deer River, Canada</h2>"
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1898.jpg' />"
						/* Paragraphs */ + "<p>The first Chasmosaurus fossil found was part of the neck frill. It was unearthed in 1898 by Lawrence Lambe along the Red Deer River, Alberta. Lambe first thought it belonged to the genus Monoclonius, so he named it Monoclonius belli. Later, in 1914 after a more complete skull had been found by Charles Sternberg, Lambe realized that his original find was a new ceratopsian and renamed it Chasmosaurus belli.</p>" + "<p>Chasmosaurus had a very long frill with enormous fenestrae (openings) on its surface. The outline of the frill is indented, making it look heart-shaped when seen from above. It is the enormous, or cavernous, fenestrae for which this dinosaur is named; its name means chasm reptile.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://dinosaurs.wikia.com/wiki/File:Chasmosaurus_raul_martin.jpg
		   }, 
		   { date: new Date("1902"), 
			 title: "The Famous T-Rex", 
			 lat:47.321667, lng:-106.91,
			 infoWin:   /* Header ----*/   "<h2>Hell Creek, Montana</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1902.jpg' />"
						/* Paragraphs */ + "<p>Over three years of digging, the beast emerged from the ground- a huge tail, tiny forearms, a bone-crunching jaw, and horrifying teeth. The skull itself weighed over 1,000 pounds. Scientists registered the bones with the number 973. Then they put the pieces together and officially named the huge beast Tyrannosaurus rex, the Tyrant King. It was what scientists call the holotype specimen of a new species, the first against which all others are compared.</p>" + "<p>T-Rex was incomplete but was not discovered as being incomplete for many years. </p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Tyrannosaurus#mediaviewer/File:Tyrannosaurus_rex_mmartyniuk.png
		   }, 
		   { date: new Date("1906"), 
			 title: "Greatest Dinosaur Deposit", 
			 lat:-6.307, lng:34.854,
			 infoWin:   /* Header ----*/   "<h2>Tanzania</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1906.jpg' />"
						/* Paragraphs */ + "<p>The Tendaguru Beds as a fossil deposit were first discovered in 1906, when German pharmacist, chemical analyst and mining engineer Bernhard Wilhelm Sattler, on his way to a mine south of the Mbemkure River in German East Africa (today Tanzania), noticed enormous bones weathering out of the path near the base of a hill. Because of its morphology, the hill was locally known as steep hill: tendaguru in the language of the local Wamwera people. Sattler sent a report of his discoveries that found its way to German palaeontologist Eberhard Fraas, then on a round trip through Africa, who visited the site in 1907 and with the aid of Sattler recovered two partial skeletons of enormous size. The material was transported to Fraas' institution, the Royal Natural History Collection in Stuttgart, Germany. Fraas described two species in the badly known genus Gigantosaurus, G. robustus and G. africanus (today Janenschia robusta and Barosaurus africanus, respectively).</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Tendaguru_Formation#mediaviewer/File:Giraffatitan_Tendaguru.jpg 
		   },
		   { date: new Date("1908"), 
			 title: "The Duck-billed Dinosaur", 
			 lat:42.97, lng:-105.5,
			 infoWin:   /* Header ----*/   "<h2>Converse Co, Wyoming</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1908.jpg' />"
						/* Paragraphs */ + "<p>A very well preserved complete hadrosaurid specimen (Edmontosaurus annectens) was recovered in 1908 by the fossil collector Charles Hazelius Sternberg and his three sons, in Converse County, Wyoming. Analyzed by Henry Osborn in 1912, it has come to be known as the Trachodon mummy. This specimen's skin was almost completely preserved in the form of impressions.</p>" + "<p>1st discovery of skin impression; thick and wrinkled, with bony knobs of various sizes embedded throughout; lacked scales; bumpy pebbled skin like elephant.</p>" + "<p>It is a large herbivorous dinosaur of the closing period  of the Age of Reptiles and is known to paleontologists as Trachodon or more popularly as the ‘duck-billed dinosaur’.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Hadrosaurid#mediaviewer/File:Edmontosaurusmummy.jpg
		   },
		   { date: new Date("1913"), 
			 title: "Gorgosaurus", 
			 lat:55, lng:-115,
			 infoWin:   /* Header ----*/   "<h2>Alberta, Canada</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1913.jpg' />"
						/* Paragraphs */ + "<p>Gorgosaurus had the same basic body plan of all tyrannosaurids with a large head on an s-shaped neck,‭ ‬small arms and bipedal stance.‭ ‬With around sixty teeth in its mouth‭ (‬there is some variance between specimens‭) ‬Gorgosaurus shared a common trait with other tyrannosaurids of its size,‭ ‬as the larger the tyrannosaurids go the less teeth they have.‭ </p>" + "<p>A skin impression of Gorgosaurus discovered by Philip J.‭ ‬Currie shows that its skin lacked the large scales as often found in other dinosaurs,‭ ‬giving it a smooth texture,‭ ‬not unlike the secondarily featherless skin of birds.‭ ‬This also lends further support to the theory that the larger dinosaurs did not have feathers on the grounds that larger bodied animals naturally lost less heat because of the smaller surface area to body volume ratio.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nhm.ac.uk/nature-online/life/dinosaurs-other-extinct-creatures/dino-directory/gorgosaurus.html 
		   },
		   { date: new Date("1922"), 
			 title: "Photographer Finds Protoceratops ", 
			 lat:42.59, lng:103.43,
			 infoWin:   /* Header ----*/   "<h2>Gobi Desert, Mongolia</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1922.jpg' />"
						/* Paragraphs */ + "<p>Photographer J.B. Shackelford discovered the first specimen of Protoceratops in the Gobi desert, (Gansu, Inner Mongolia), as part of a 1922 American expedition looking for human ancestors. No early human fossils were found, but the expedition, led by Roy Chapman Andrews, collected many specimens of the Protoceratops genus, along with fossil skeletons of theropods Velociraptor, Oviraptor, and ceratopsid Psittacosaurus.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://dinosaurios.org/protoceratops/ 
		   },
		   { date: new Date("1923"), 
			 title: "Velociraptor", 
			 lat:42.59, lng:103.43,
			 infoWin:   /* Header ----*/   "<h2>Gobi Desert, Mongolia</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1923-1.jpg' />"
						/* Paragraphs */ + "<p>The most amazing find in Mongolia may be the discovery of the skeletons of the small theropod Velociraptor (speedy predator) with its right arm clamped firmly in the beak of the small ceratopsian Protoceratops. Both skeletons are complete. They are a picture of a Late Cretaceous struggle to the death. Soon after their deaths, they were buried by the drifting sands of a dune. They laid together in this death pose until 1971, when they were unearthed.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Velociraptor#mediaviewer/File:Velociraptor_Wyoming_Dinosaur_Center.jpg
		   },
		   { date: new Date("1923"), 
			 title: "Eggs in the Desert", 
			 lat:42.59, lng:103.43,
			 infoWin:   /* Header ----*/   "<h2>Gobi Desert, Mongolia</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1923-2.jpg' />"
						/* Paragraphs */ + "<p>Many dinosaurs, if not all of them, were oviparous, or egg layers. In 1923, great numbers of petrified dinosaur eggs and shell fragments were found in the Gobi Desert of southern Mongolia. This remote region is one of the richest dinosaur nesting sites known. The eggs were found within nests full of ground, are bordered by circular arrangement of stones.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://science.nationalgeographic.com/wallpaper/science/photos/jurassic-period/dinosaur-eggs/ 
		   },
		   { date: new Date("1929"), 
			 title: "Dinosaurs of Patagonia", 
			 lat:0, lng:0,
			 infoWin:   /* Header ----*/   "<h2>Patagonia, Argentina</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1929.jpg' />"
						/* Paragraphs */ + "<p>On New Year's Day 1923, Huene received a letter from the director of the museum in La Plata, Argentina, inviting him to study old and new collections of sauropod bones from the Upper Cretaceous of Patagonia. He eagerly acepted this offer and set out on a long journey. Not content with studying the fossils housed in La Plata museum, Huene wanted to examine their geological setting, and on a fieldtrip to Patagonia, he discovered another promising sate in late 1923. Later he published a monography on the Late Cretaceous dinosaurs of Patagonia (Huene 1929) which laid the foundation for all subsequent work on Cretaceous dinosaurs in Argentina.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://en.wikipedia.org/wiki/Patagonia#mediaviewer/File:Cuernos_del_Paine_from_Lake_Peho%C3%A9.jpg
		   },
		   { date: new Date("1931"), 
			 title: "Dinosaur Graveyard", 
			 lat:44.491389, lng:-108.053611,
			 infoWin:   /* Header ----*/   "<h2>Howe Ranch, Wyoming</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1931.jpg' />"
						/* Paragraphs */ + "<p>Brown had led prospecting parties to the Lower Cretaceous beds of Montana, following the fossil-bearing rock southward to Greybull, Wyoming.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://geoscience.wisc.edu/~maher/air/air07.htm
		   },
		   { date: new Date("1981"), 
			 title: "Scipionyx", 
			 lat:41.36, lng:14.55,
			 infoWin:   /* Header ----*/   "<h2>Pietraroja, Italy</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1981.jpg' />"
						/* Paragraphs */ + "<p>Fossilized impression of many of its internal organs and muscles.</p>" + "<p>Discovered in 1981 by amateur paleontologist Giovanni Todesco near Pietraroja, Italy. Fossils were preserved in the Pietraroja limestone formation, known for unusually well-preserved fossils. Fossil thought to have been a bird and kept in basement for 11 years. In 1992 identified as the first dinosaur found in Italy.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from ... word document
		   },
		   { date: new Date("1990"), 
			 title: "Sue", 
			 lat:43.983333, lng:-103.75,
			 infoWin:   /* Header ----*/   "<h2>Black Hills, South Dakota</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1990.jpg' />"
						/* Paragraphs */ + "<p>Sue's skeleton was over 90 percent complete, and the bones were extremely well-preserved. Fossil hunter Susan Hendrickson discovers three huge bones jutting out of a cliff near Faith, South Dakota. They turn out to be part of the largest-ever Tyrannosaurus rex skeleton ever discovered</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from ... 
		   },
		   { date: new Date("2002"), 
			 title: "Tooth in Thigh", 
			 lat:39, lng:-111,
			 infoWin:   /* Header ----*/   "<h2>Southern Utah</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/2002.jpg' />"
						/* Paragraphs */ + "<p>A large number of mostly tiny bits of dinosaur bones were recovered in groups at four locations within the Utah park, which paleontologists and geologists know as the Upper Cretaceous (Campanian) Kaiparowits Formation – leading paleontologists to believe that crocodyliforms had fed on baby dinosaurs 1-2 meters in total length.</p>" + "<p>Boyd laid the pieces of the dinosaur out on a table looking for a skull. He found something with a tooth in it, but it was not the head of a baby dinosaur, it was a tooth from their predator, the crocodyliform.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from Kristina Barker, Rapid City Journal: http://rapidcityjournal.com/news/new-dinosaur-discovered-by-school-of-mines-professor/article_57c1b44a-ce20-50c3-8fbb-ea10a8ffaef4.html
		   },
		   { date: new Date("2013"), 
			 title: "Oviraptor Tail Feathers", 
			 lat:46, lng:105,
			 infoWin:   /* Header ----*/   "<h2>Mongolia</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/2013.jpg' />"
						/* Paragraphs */ + "<p>Studying fossils, Persons realized Oviraptors would have had long, nimble tails with attachments for powerful muscles to swish them back and forth. He also found the tails ended in pieces of solid bone called pygostyles, features found in only one other kind of animal-modern birds.</p>" + "<p>Fossil impressions reveal that oviraptorids also came equipped with a fan of feathers at the end of their tails, attached to a hunk of fused vertebrae not unlike those found in the tails of modern-day birds.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from ... 
		   }];
					
// Set Configuration Options
var mapCenter = { lat: 48.8582, lng: 2.2945 }; // initial center point for map
var wideZoom = 2;	// Set default zoom level for initial map
var macroZoom = 10;	// Set zoom for close up to pin
var panDelay = 500 	// change the delay when zooming in and out to allow panning animation
var yearIncrements = 50; //set the increments for the start and end selections
var timelineScale = 2;


// Set Global Variables		   
var markers = new Array();
var radioButtons;
var thisMap;
var todaysDate = new Date(); // This year, 2014



// ################################################################## //
// ############# SET MARKERS, ICON, CLICKABLE, DISPLAY ############## //
// ################################################################## //

function setMapMarker(thisID, thisLat, thisLng) {
	markers[thisID] = new google.maps.Marker({
		position: {
			lat:thisLat,
			lng:thisLng
		},
		icon: 'images/dinoicon.png'
		
	});
	google.maps.event.addListener(markers[thisID], 'click', function() {
		if (thisMap.getZoom() <= (wideZoom + 1)) {
			zoomToMarker(thisID);
		}
  	});

	markers[thisID].setMap(thisMap);
}

function displayMarker(thisID, thisDisplay) {
	if(thisDisplay) {
		markers[thisID].setMap(thisMap);
	} else {
		markers[thisID].setMap(null);
	}
}



// ################################################################## //
// #################### TIMELINESCROLL CONTROLS ##################### //
// ################################################################## //

// Show arrows based on timeline position
function scrollArrowShow() {
        var maxScroll = ($('#timeline ul').width() - $('#timeline').scrollLeft()) - $('#timeline').width();
        if ( 0 == $('#timeline').scrollLeft()) {
            $('#leftArrow').fadeOut();
        }else{
            $('#leftArrow').fadeIn();
        }
        if ( 0 == maxScroll) {
            $('#rightArrow').fadeOut();
        }else{
            $('#rightArrow').fadeIn();
        }
}

// leftArrow and rightArrow have onClicks in HTML that sends data to scrollThuumb
function scrollThumb(direction) {
        if (direction=='left') {
            $('#timeline').animate({
                scrollLeft: "-=" + 700 + "px"
            }, function(){
                scrollArrowShow();
            });
        }else
        if (direction=='right') {
            $('#timeline').animate({
                scrollLeft: "+=" + 700 + "px"
            }, function(){
                scrollArrowShow();
            });
        }
		setTimeout(function(){
			console.log("Scrolled Position:" + $('#timeline').scrollLeft());
		}, 1000);
}



// ################################################################## //
// ###### NO CUSTOM GOOGLE ANIMATIONS, SO WE MADE ZOOMTOMARKER ###### //
// ##### CONTROLS INFOWINDOWS, RESET MAP, WHICH RADIO IS CHECKED #### //
// ########### CONTROLS SCROLLBAR WHEN USER CLICKS ON ICON ########## //
// ################################################################## //

function zoomToMarker(thisID) {
		
		$('#infoWindow').hide('slide',{direction:'right'}, 200);
		$('#resetMap').fadeOut(200);
		
		if (thisID == 'center') {
			thisMap.setZoom(wideZoom);
			setTimeout(function(){
				thisMap.panTo(mapCenter);
			}, panDelay);
			$('#timeline ul li input[type="radio"]').each(function() {
				$(this).prop('checked', false);
				$(this).parent().removeClass('active');
			});
		} else {
			var dateGap = (coords[thisID].date.getFullYear() - coords[0].date.getFullYear()) * timelineScale;
			console.log("Date Gap: " + dateGap);
			console.log("This ID: " + thisID);
			dateGap += (66 * (thisID) ) + 33;
			scrollLeft = $('#timeline').scrollLeft();
			
			console.log("Date Gap: " + dateGap);
			console.log("Scroll Left: " + scrollLeft);
			
			
			//math.round rounds up to the nearest interger, math.floor rounds down
			var targetDistance = Math.floor(dateGap / 700);
			var currentDistance = Math.floor(scrollLeft / 700);
			console.log("Scroll Distance: " + targetDistance);
			console.log("Current Scroll: " + currentDistance);
			
			setTimeout (function() {
				if (targetDistance > currentDistance) {
					for(var i=currentDistance;i<targetDistance; i++) {
						scrollThumb('right');
					}
				} else if(targetDistance < currentDistance){
					for(var i=currentDistance;i>targetDistance; i--) {
						scrollThumb('left');
					}
				} 
			}, 522);
			
			var thisMarker = markers[thisID];
			thisMap.setZoom(wideZoom);
			
			var liIndex = 0;
			$('#timeline ul li input[type="radio"]').each(function() {
				if (liIndex != thisID) {
					$(this).prop('checked', false);
					$(this).parent().removeClass("active");
				} else {
					$(this).prop('checked', true);
					$(this).parent().addClass("active");
				}
				liIndex++;
			});
			
			setTimeout(function(){
				thisMap.panTo(thisMarker.getPosition());
				setTimeout(function(){
					var thisPoint = thisMap.getProjection().fromLatLngToPoint(thisMarker.getPosition());
					thisMap.setZoom(macroZoom);
					$('#infoWindow').html(coords[thisID].infoWin);
					setTimeout(function(){
					$('#infoWindow').show('slide',{direction:'right'}, 200);
					thisMap.panTo(thisMap.getProjection().fromPointToLatLng(new google.maps.Point(
						thisPoint.x + 0.128,
						thisPoint.y - 0.0
					)));
					}, 250);
					$('#resetMap').fadeIn();
				}, panDelay);
			}, panDelay);
		}
}
		


// ################################################################## //
// ############### GENERATE TIMELINE & RADIO BUTTONS ################ //
// ################################################################## //

function generateTimeline(startYear, endYear) {
	if (!startYear) startYear = 1650;
	if (!endYear) endYear = todaysDate.getFullYear();
	thisScale = timelineScale;
	
	// Zoom out, clear timeline to make space for new list
	zoomToMarker("center");
	$('#timeline').html("");
	
	radioButtons = "<hr/><ul>\r\n";
	// set all information into coords array, place markers
	var prevYear;
	var css = "";
	var totalWidth = 0;
	var markersSet = markers.length;
	var activeMarkers = 0;
	var combinedCount = 0;
	for (var i = 0; i < coords.length; i++) {
		var thisYear = coords[i].date.getFullYear();
		if (markersSet < 1) {
			setMapMarker(i,coords[i].lat,coords[i].lng,thisMap);
		} 
		if(thisYear > startYear && thisYear < endYear) {
			// Place radio buttons only if DATE is not repeated, avoiding multiple buttons with same year
			var nextItem = (i + 1);
			var nextYear = 0;
			console.log(nextItem);
			if (nextItem < coords.length) {
				nextYear = coords[nextItem].date.getFullYear();
			} else {
				nextYear = 0;
			}
			if (thisYear == nextYear) {
				if(combinedCount < 1) {
					if (activeMarkers > 0) {
						var thisWidth = (thisYear - prevYear)*thisScale;
						css = 'style="margin-left:';
						css += thisWidth + 'px;"';
						totalWidth += thisWidth + 66;
					}
					radioButtons += '<li '+css+'><label>'+(coords[i].date.getFullYear()+1)+'<br /><div class="plus">+</div></label></li>\r\n';
					radioButtons += '<ul class="subYears">';
				}
				radioButtons += '<li><label>'+(coords[i].date.getFullYear()+1)+' <input type="radio" name="facts" onClick="zoomToMarker('+i+')"></label></li>\r\n';
				combinedCount++;
			} else {
				if (activeMarkers > 0) {
					var thisWidth = (thisYear - prevYear)*thisScale;
					css = 'style="margin-left:';
					css += thisWidth + 'px;"';
					totalWidth += thisWidth + 66;
				}
				if(combinedCount > 0) {
					radioButtons += '</ul>';
					combinedCount = 0;
				}
				radioButtons += '<li '+css+'><label>'+(coords[i].date.getFullYear()+1)+'<br /><input type="radio" name="facts" onClick="zoomToMarker('+i+')"></label></li>\r\n';
			}
			
			displayMarker(i, true);
			activeMarkers++;
			
		}	else {
				displayMarker(i, false);
		}
		prevYear = thisYear;
	}
	// Make divisible by 700
	var remainder = totalWidth % 700;
	if(remainder > 0) {
		totalWidth += 700 - remainder;
	}
	// Account for the difference between page width and layer width
	totalWidth += 100;
	console.log("Total Width: " + totalWidth);
	
	radioButtons += "</ul>";
	$("#timeline").append(radioButtons);
	$('#timeline ul').css({width: totalWidth+"px"});
}



// ################################################################## //
// ################ SET GOOGLE MAPS OPTIONS AND API ################# //
// ################################################################## //

(function (window, google) {
	//thisMap options
	var options = {
		//set center of thisMap on load
		center: mapCenter,
		zoom: wideZoom,
		disableDefaultUI:true,
		//mapTypeId: google.maps.MapTypeId.HYBRID,
		
		//styling from SnazzyMaps		
		styles: [{"stylers":[{"saturation":-45},{"lightness":13}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#8fa7b3"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#667780"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#8fa7b3"},{"gamma":2}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#bbd9e9"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#525f66"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#bbd9e9"},{"gamma":2}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#a3aeb5"}]}]
	};
	
		//thisMap
		element = document.getElementById('map-canvas'),
		thisMap = new google.maps.Map(element, options);
}(window, google));



// ################################################################## //
// # RECEIVE START/END DATES FROM USER, PASS TO GENERATETIMELINE()  # //
// ################################################################## //

$(function() {
	for (i=1650; i<=todaysDate.getFullYear(); i++) {
		if(i % yearIncrements === 0 || i == todaysDate.getFullYear()) {
			$('select[name="startYear"], select[name="endYear"]').append('<option value="'+i+'">'+i+'</option>');
		}
	}
	$('select[name="endYear"]').val(todaysDate.getFullYear());
	$('select[name="startYear"], select[name="endYear"]').on("change",function(){
		generateTimeline($('select[name="startYear"]').val(),$('select[name="endYear"]').val());
	});
	$('#resetMap').on('click', function(){
		zoomToMarker('center');
	});
	coords.sort(function(a,b) { return parseFloat(a.date.getFullYear()) - parseFloat(b.date.getFullYear()) } );
	generateTimeline();
	scrollArrowShow();
	
});
