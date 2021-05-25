const AwardedWoman = [
  {"Name": "Ada Yonath", "Year": "2009", "Country": "Israel", "Category": "Chemistry", "Description": "\"For studies of the structure and function of the ribosome\"", "Details": "", "Shares": "(shared with Pierre Curie and Henri Becquerel)"},
  {"Name": "Alice Munro", "Year": "2013", "Country": "Canada", "Category": "Literature", "Description": "\"Master of the contemporary short story\"", "Details": "", "Shares": ""},
  {"Name": "Alva Myrdal", "Year": "1982", "Country": "Sweden", "Category": "Peace", "Description": "\"Former Cabinet Minister; Diplomat; Writer.\"", "Details": "", "Shares": ""},
  {"Name": "Aung San Suu Kyi", "Year": "1991", "Country": "Burma", "Category": "Peace", "Description": "\"For her non-violent struggle for democracy and human rights\"", "Details": "", "Shares": ""},
  {"Name": "Barbara McClintock", "Year": "1983", "Country": "United States", "Category": "Physiology or Medicine", "Description": "\"For her discovery of mobile genetic elements\"", "Details": "", "Shares": ""},
  {"Name": "Bertha von Suttner", "Year": "1905", "Country": "Czech Republic", "Category": "Peace", "Description": "\"Honorary President of Permanent International Peace Bureau, Bern, Switzerland; Author of \"Lay Down Your Arms\".\"", "Details": "Born in the Austrian Empire, now Czech Republic", "Shares": ""},
  {"Name": "Betty Williams", "Year": "1976", "Country": "Ireland, United Kingdom", "Category": "Peace", "Description": "\"Founder of the Northern Ireland Peace Movement (later renamed Community of Peace People)\"", "Details": "Born in North Ireland, part\u00a0of the\u00a0UK", "Shares": "(shared with Nicholas Murray Butler)"},
  {"Name": "Carol W. Greider", "Year": "2009", "Country": "United States", "Category": "Physiology or Medicine", "Description": "\"For the discovery of how chromosomes are protected by telomeres and the enzyme telomerase\"", "Details": "", "Shares": "(shared with Fr\u00e9d\u00e9ric Joliot-Curie)"},
  {"Name": "Christiane N\u00fcsslein-Volhard", "Year": "1995", "Country": "Germany", "Category": "Physiology or Medicine", "Description": "\"For their discoveries concerning the genetic control of early embryonic development\"", "Details": "", "Shares": ""},
  {"Name": "Donna Strickland", "Year": "2018", "Country": "Canada", "Category": "Physics", "Description": "\"For their method of generating high-intensity, ultra-short optical pulses\"", "Details": "", "Shares": ""},
  {"Name": "Doris Lessing", "Year": "2007", "Country": "Iran, United Kingdom", "Category": "Literature", "Description": "\"That epicist of the female experience, who with scepticism, fire and visionary power has subjected a divided civilisation to scrutiny\"", "Details": "Born in Iran, worked in the UK", "Shares": "(shared with John Raleigh Mott)"},
  {"Name": "Dorothy Hodgkin", "Year": "1964", "Country": "United Kingdom", "Category": "Chemistry", "Description": "\"For her determinations by X-ray techniques of the structures of important biochemical substances\"", "Details": "", "Shares": "(shared with Carl Ferdinand Cori and Bernardo Houssay)"},
  {"Name": "Elfriede Jelinek", "Year": "2004", "Country": "Austria", "Category": "Literature", "Description": "\"For her musical flow of voices and counter-voices in novels and plays that with extraordinary linguistic zeal reveal the absurdity of society's clich\u00e9s and their subjugating power\"", "Details": "0", "Shares": "(shared with J. Hans D. Jensen and Eugene Wigner)"},
  {"Name": "Elinor Ostrom", "Year": "2009", "Country": "United States", "Category": "Economics", "Description": "\"For her analysis of economic governance, especially the commons\"", "Details": "", "Shares": ""},
  {"Name": "Elizabeth Blackburn", "Year": "2009", "Country": "Australia, United States", "Category": "Physiology or Medicine", "Description": "\"For the discovery of how chromosomes are protected by telomeres and the enzyme telomerase\"", "Details": "Born in Australia, worked in the US", "Shares": "(shared with Samuel Agnon)"},
  {"Name": "Ellen Johnson Sirleaf", "Year": "2011", "Country": "Liberia", "Category": "Peace", "Description": "\"For their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"", "Details": "", "Shares": ""},
  {"Name": "Emily Greene Balch", "Year": "1946", "Country": "United States", "Category": "Peace", "Description": "\"Formerly Professor of History and Sociology; Honorary International President, Women's International League for Peace and Freedom.\"", "Details": "", "Shares": ""},
  {"Name": "Esther Duflo", "Year": "2019", "Country": "France, United States", "Category": "Economics", "Description": "\"For their experimental approach to alleviating global poverty\"", "Details": "Born in France, worked in the US", "Shares": "(shared with Roger Guillemin and Andrew Schally)"},
  {"Name": "Frances H. Arnold", "Year": "2018", "Country": "United States", "Category": "Chemistry", "Description": "\"For the directed evolution of enzymes\"", "Details": "", "Shares": ""},
  {"Name": "Fran\u00e7oise Barr\u00e9-Sinoussi", "Year": "2008", "Country": "France", "Category": "Physiology or Medicine", "Description": "\"For their discovery of HIV, human immunodeficiency virus\"", "Details": "", "Shares": "(shared with Alfonso Garc\u00eda Robles)"},
  {"Name": "Gabriela Mistral", "Year": "1945", "Country": "Chile", "Category": "Literature", "Description": "\"For her lyric poetry which, inspired by powerful emotions, has made her name a symbol of the idealistic aspirations of the entire Latin American world\"", "Details": "", "Shares": ""},
  {"Name": "Gertrude B. Elion", "Year": "1988", "Country": "United States", "Category": "Physiology or Medicine", "Description": "\"For their discoveries of important principles for drug treatment\"", "Details": "", "Shares": "(shared with Stanley Cohen)"},
  {"Name": "Gerty Cori", "Year": "1947", "Country": "Czech Republic, United States", "Category": "Physiology or Medicine", "Description": "\"For their discovery of the course of the catalytic conversion of glycogen\"", "Details": "Born in the Austrian Empire (now Czech Republic), worked in the US", "Shares": "(shared with James W. Black and George H. Hitchings)"},
  {"Name": "Grazia Deledda", "Year": "1926", "Country": "Italy", "Category": "Literature", "Description": "\"For her idealistically inspired writings which with plastic clarity picture the life on her native island and with depth and sympathy deal with human problems in general\"", "Details": "", "Shares": ""},
  {"Name": "Herta M\u00fcller", "Year": "2009", "Country": "Germany, Romania", "Category": "Literature", "Description": "\"Who, with the concentration of poetry and the frankness of prose, depicts the landscape of the dispossessed\"", "Details": "Born in\u00a0Romania, worked in Germany", "Shares": ""},
  {"Name": "Ir\u00e8ne Joliot-Curie", "Year": "1935", "Country": "France", "Category": "Chemistry", "Description": "\"For their synthesis of new radioactive elements\"", "Details": "", "Shares": ""},
  {"Name": "Jane Addams", "Year": "1931", "Country": "United States", "Category": "Peace", "Description": "\"Sociologist; International President, Women's International League for Peace and Freedom.", "Details": "", "Shares": ""},
  {"Name": "Jody Williams", "Year": "1997", "Country": "United States", "Category": "Peace", "Description": "\"For their work for the banning and clearing of anti-personnel mines\"", "Details": "", "Shares": "(shared with Edward B. Lewis and Eric F. Wieschaus)"},
  {"Name": "Leymah Gbowee", "Year": "2011", "Country": "Liberia", "Category": "Peace", "Description": "\"For their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"", "Details": "", "Shares": ""},
  {"Name": "Linda B. Buck", "Year": "2004", "Country": "United States", "Category": "Physiology or Medicine", "Description": "\"For their discoveries of odorant receptors and the organization of the olfactory system\"", "Details": "", "Shares": "(shared with the International Campaign to Ban Landmines)"},
  {"Name": "Mairead Maguire", "Year": "1976", "Country": "Ireland, United Kingdom", "Category": "Peace", "Description": "\"Founder of the Northern Ireland Peace Movement (later renamed Community of Peace People)\"", "Details": "Born in North Ireland, part\u00a0of the\u00a0UK", "Shares": ""},
  {"Name": "Malala Yousafzai", "Year": "2014", "Country": "Pakistan", "Category": "Peace", "Description": "\"For their struggle against the suppression of children and young people and for the right of all children to education\".", "Details": "", "Shares": ""},
  {"Name": "Maria Goeppert-Mayer", "Year": "1963", "Country": "Germany, United States", "Category": "Physics", "Description": "\"For their discoveries concerning nuclear shell structure\"", "Details": "Born in then Germany,  worked in the US", "Shares": ""},
  {"Name": "Marie Sk\u0142odowska-Curie", "Year": "1903", "Country": "France, Poland", "Category": "Physics", "Description": "\"In recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel\"", "Details": "Born in Congress Poland, worked in France", "Shares": "(shared with Richard Axel)"},
  {"Name": "Marie Sk\u0142odowska-Curie", "Year": "1911", "Country": "France, Poland", "Category": "Chemistry", "Description": "\"For her discovery of radium and polonium\"", "Details": "Born in Congress Poland, worked in France", "Shares": ""},
  {"Name": "May-Britt Moser", "Year": "2014", "Country": "Norway", "Category": "Physiology or Medicine", "Description": "\"For their discoveries of cells that constitute a positioning system in the brain\"", "Details": "", "Shares": "(shared with Harald zur Hausen and Luc Montagnier)"},
  {"Name": "Mother Teresa", "Year": "1979", "Country": "India, North Macedonia", "Category": "Peace", "Description": "\"Leader of Missionaries of Charity, Calcutta.\"", "Details": "Born in then Ottoman Empire (now\u00a0North Macedonia), worked in India", "Shares": "(shared with Jack W. Szostak)"},
  {"Name": "Nadia Murad", "Year": "2018", "Country": "Iraq", "Category": "Peace", "Description": "\"For their efforts to end the use of sexual violence as a weapon of war and armed conflict\"", "Details": "", "Shares": "(shared with Jack W. Szostak)"},
  {"Name": "Nadine Gordimer", "Year": "1991", "Country": "South Africa", "Category": "Literature", "Description": "\"Who through her magnificent epic writing has - in the words of Alfred Nobel - been of very great benefit to humanity\"", "Details": "", "Shares": "(shared with Venkatraman Ramakrishnan and Thomas A. Steitz)"},
  {"Name": "Nelly Sachs", "Year": "1966", "Country": "Germany, Sweden", "Category": "Literature", "Description": "\"For her outstanding lyrical and dramatic writing, which interprets Israel's destiny with touching strength\"", "Details": "Born in Germany, worked in Sweden", "Shares": ""},
  {"Name": "Olga Tokarczuk", "Year": "2018", "Country": "Poland", "Category": "Literature", "Description": "\u201cFor a narrative imagination that with encyclopedic passion represents the crossing of boundaries as a form of life\u201d", "Details": "", "Shares": "(shared with Oliver E. Williamson)"},
  {"Name": "Pearl S. Buck", "Year": "1938", "Country": "United States", "Category": "Literature", "Description": "\"For her rich and truly epic descriptions of peasant life in China and for her biographical masterpieces\"", "Details": "", "Shares": ""},
  {"Name": "Rigoberta Mench\u00fa", "Year": "1992", "Country": "Guatemala", "Category": "Peace", "Description": "\"In recognition of her work for social justice and ethno-cultural reconciliation based on respect for the rights of indigenous peoples\"", "Details": "", "Shares": ""},
  {"Name": "Rita Levi-Montalcini", "Year": "1986", "Country": "Italy, United States", "Category": "Physiology or Medicine", "Description": "\"For their discoveries of growth factors\"", "Details": "Born in Italy, worked in the US", "Shares": ""},
  {"Name": "Rosalyn Sussman Yalow", "Year": "1977", "Country": "United States", "Category": "Physiology or Medicine", "Description": "\"For the development of radioimmunoassays of peptide hormones\"", "Details": "", "Shares": ""},
  {"Name": "Selma Lagerl\u00f6f", "Year": "1909", "Country": "Sweden", "Category": "Literature", "Description": "\"In appreciation of the lofty idealism, vivid imagination and spiritual perception that characterize her writings\"", "Details": "", "Shares": "(shared with Edvard Moser and John O'Keefe)"},
  {"Name": "Shirin Ebadi", "Year": "2003", "Country": "Iran", "Category": "Peace", "Description": "\"For her efforts for democracy and human rights. She has focused especially on the struggle for the rights of women and children\"", "Details": "", "Shares": "(shared with Kailash Satyarthi)"},
  {"Name": "Sigrid Undset", "Year": "1928", "Country": "Norway", "Category": "Literature", "Description": "\"Principally for her powerful descriptions of Northern life during the Middle Ages\"", "Details": "", "Shares": "(shared with William C. Campbell and Satoshi \u014cmura)"},
  {"Name": "Svetlana Alexievich", "Year": "2015", "Country": "Belarus, Ukraine", "Category": "Literature", "Description": "\"For her polyphonic writings, a monument to suffering and courage in our time\"", "Details": "Born in Ukraine, worked in Belarus", "Shares": ""},
  {"Name": "Tawakkol Karman", "Year": "2011", "Country": "Yemen", "Category": "Peace", "Description": "\"For their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"", "Details": "", "Shares": "(shared with G\u00e9rard Mourou and Arthur Ashkin)"},
  {"Name": "Toni Morrison", "Year": "1993", "Country": "United States", "Category": "Literature", "Description": "\"Who in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality\"", "Details": "", "Shares": "(shared with Gregory Winter and George Smith)"},
  {"Name": "Tu Youyou", "Year": "2015", "Country": "China", "Category": "Physiology or Medicine", "Description": "\"For her discoveries concerning a novel therapy against Malaria (artemisinin)\"", "Details": "", "Shares": "(shared with Denis Mukwege)"},
  {"Name": "Wangari Maathai", "Year": "2004", "Country": "Kenya", "Category": "Peace", "Description": "\"For her contribution to sustainable development, democracy and peace\"", "Details": "", "Shares": ""},
  {"Name": "Wis\u0142awa Szymborska", "Year": "1996", "Country": "Poland", "Category": "Literature", "Description": "\"For poetry that with ironic precision allows the historical and biological context to come to light in fragments of human reality\"", "Details": "", "Shares": "(shared with Abhijit Banerjee and Michael Kremer)"}
]