import React from 'react';
import './App.css'; // Make sure to create and import your CSS file

const MovieList = () => {
  return (
    <><div className="movie-list-container">
          <h1 className="movie-list-title">NEW RELEASES</h1>
          <div className="movie-list-wrapper">
              <div className="movie-list">
                  {/* Add your movie items here */}
                  <div className="movie-list-item">
                      <img className="movie-list-item-img" src="images/5.jpg" alt="Godzilla X KingKong" />
                      <span className="movie-list-item-title">Godzilla X KingKong</span>
                      <p className="movie-list-item-desc">
                          Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.
                      </p>
                      <button className="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/1.jpg" alt="" />
                      <span class="movie-list-item-title">Under Paris</span>
                      <p class="movie-list-item-desc">To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past
                          when a giant shark appears in the Seine.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/2.jpg" alt="" />
                      <span class="movie-list-item-title">Sting</span>
                      <p class="movie-list-item-desc">After raising an unnervingly talented spider in secret, 12-year-old
                          Charlotte must face the facts about her pet and fight for her family's survival when the once charming creature
                          rapidly transforms into a giant, flesh eating monster</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/3.jpg" alt="" />
                      <span class="movie-list-item-title">ABIGAIL</span>
                      <p class="movie-list-item-desc">After a group of criminals kidnap the ballerina daughter of a powerful underworld
                          figure, they retreat to an isolated mansion, unaware that they're locked inside with no normal little girl.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/4.jpg" alt="" />
                      <span class="movie-list-item-title">GODS OF THE DEEP</span>
                      <p class="movie-list-item-desc">When a daring mission leads a deep sea submarine team into a mysterious opening on the ocean floor
                          they uncover a lost underwater world and awaken its ancient race of otherworldly beings.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/5.jpg" alt="" />
                      <span class="movie-list-item-title">Godizila X kingKong</span>
                      <p class="movie-list-item-desc">Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their
                          interwined origins and connection to skull island's mysteries.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/20.jpg" alt="" />
                      <span class="movie-list-item-title">The Magician's Elephant</span>
                      <p class="movie-list-item-desc">An orphaned boy is told by a fortune teller that an elephant will help him find
                          his lost sister.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/7.jpg" alt="" />
                      <span class="movie-list-item-title">HOUSEOF THE DRAGON</span>
                      <p class="movie-list-item-desc">An internal succession war within House Targaryen at height of its power
                          172 years before the birth of Daenerys Targaryen.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
              </div>
              {/* Add more movie items as needed */}
          </div>
          <i className="fas fa-chevron-right arrow"></i>
      </div><h1 className="movie-list-title">POPULAR</h1><div className="movie-list-wrapper">
              <div className="movie-list">
                  {/* Add your movie items here */}
                  <div className="movie-list-item">
                      <img className="movie-list-item-img" src="images/8.jpg" alt="NIGHT SWIM" />
                      <span className="movie-list-item-title">NIGHT SWIM</span>
                      <p className="movie-list-item-desc">
                          A family moves into a new home, unaware that a dark secret from the house's past will unleash a malevolent force in the backyard pool.
                      </p>
                      <button className="movie-list-item-button">Watch</button>
                  </div>
                  {/* Add more movie items as needed */}
              </div>
          </div><h1 className="movie-list-title">RECOMMENDED</h1><div className="movie-list-wrapper">
              <div className="movie-list">
                  {/* Add your movie items here */}
                  <div className="movie-list-item">
                      <img className="movie-list-item-img" src="images/17.jpg" alt="The Rings Of Power" />
                      <span className="movie-list-item-title">The Rings Of Power</span>
                      <p className="movie-list-item-desc">
                          Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.
                      </p>
                      <button className="movie-list-item-button">Watch</button>
                  </div>
                  {/* Add more movie items as needed */}
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/18.jpg" alt="Rabel Moon 2: The Scargiver" />
                      <span class="movie-list-item-title">Rabel Moon 2: The Scargiver</span>
                      <p class="movie-list-item-desc">Kora and surviving warriors prepare to defend Veldt, their new home, alongside its people against
                          the Realm. The warriors face their pasts, revealing their motivation before the Realm's forces arrive to crush the
                          growing rebellion.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/19.jpg" alt="Doctor Strange In The Multiverse" />
                      <span class="movie-list-item-title">Doctor Strange In The Multiverse</span>
                      <p class="movie-list-item-desc">Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses to battle
                          multiple threats, including other universe versions of himself, which threaten to wipe out millions across the multiverse. They seek
                          help from Wanda the Scarlet Witch, Wong and others.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/7.jpg" alt="House Of The Dragron" />
                      <span class="movie-list-item-title">House Of The Dragron</span>
                      <p class="movie-list-item-desc">Epic drama  set thousands of years before the events of J.R.R Tolkien's 'The Hobbit' and
                          'The Lord's of the Rings' follows an esemble cast of characters, both familiar and new, as they confront the
                          long feared re-emergence of evil to middle earth.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/24.jpg" alt="The Idea Of You" />
                      <span class="movie-list-item-title">The Idea Of You</span>
                      <p class="movie-list-item-desc">Solene, a 40-year old single mom, begins an unexpected romance with 24-year old Hayes Campbell,
                          the lead singer of August Moon, the hottest boy band on the planet.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/14.jpg" alt="GAME OF THRONES" />
                      <span class="movie-list-item-title">GAME OF THRONES</span>
                      <p class="movie-list-item-desc">Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns
                          after being dormant for millennia.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
                  <div class="movie-list-item">
                      <img class="movie-list-item-img" src="images/22.jpg" alt="AQUAMAN" />
                      <span class="movie-list-item-title">AQUAMAN</span>
                      <p class="movie-list-item-desc">Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a
                          war between the worlds of ocean and land.</p>
                      <button class="movie-list-item-button">Watch</button>
                  </div>
              </div>
          </div>
        );
    );</>
)};

export default MovieList;