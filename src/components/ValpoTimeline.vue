<template lang="html">
<section id="timeline" class="timeline">
	<div class="card-wrapper">
		<div class="card" v-for="item in items">
			<div class="head">
				<div class="date-box">
					<span class="day">{{item.day}}</span></br>
          <span class="year">{{item.year}}</span>
				</div>
				<h2>{{item.title}}</h2>
			</div>
			<div class="body">
        <p>{{item.description}}</p>
        <img v-lazy="item.image" :alt="item.title">
			</div>
		</div>
	</div>
</section>
</template>

<script>
// Images
import birth from "../assets/images/timeline/birth-valparaiso.jpg";
import building from "../assets/images/timeline/building.jpg";
import moving from "../assets/images/timeline/moving-to-amsterdam.jpg";
import collaborations from "../assets/images/timeline/colaborations2.jpg";
import festivals from "../assets/images/timeline/festivals.jpg";
import theplan from "../assets/images/timeline/making-the-plan.jpg";
import findaboat from "../assets/images/timeline/help-us-find-a-boat.jpg";
import freedom from "../assets/images/timeline/freedom-festival.jpg";
import france from "../assets/images/timeline/france.jpg";
import trade from "../assets/images/timeline/pirate-economy-trade.jpg";
import newboat from "../assets/images/timeline/new-bote.jpg";
import pirateApp from "../assets/images/timeline/pirate_app.jpg";
import trainings from "../assets/images/timeline/trainings_1.jpg";


export default {
  name: "ValpoTimeline",
  // components: {},
  data: () => ({
    items: [
      {
        day: "23 of May",
        year: "2012",
        title: "Birth",
        description: "The ship is found and the adventure begins! The 100 year old canal vessel and the nomadic Dutchman make their first journey towards their new life, with little idea of how many faces, stories, experiences and lessons they will encounter in their first exhilarating years together.",
        image: birth
      },
      {
        day: "23 of Jan",
        year: "2013",
        title: "Building",
        description: "While transforming the boat into a stained glass art studio, the Captain welcomes volunteers from a global community of artists, travellers and tradesmen. The adventurous souls sharing their skills and creativity onboard quickly become an essential part of the Valparaíso story.",
        image: building
      },
      {
        day: "10 of Dec",
        year: "2013",
        title: "Moving to Amsterdam",
        description: "It is time to broaden the Valparaíso horizons and she sets sail for Amsterdam! Here the Captain finds significantly more opportunities for creative collaborations, access to resources and an ever-widening circle of volunteers and kindred projects. An exciting new chapter begins!",
        image: moving
      },
      {
        day: "15 of Jul",
        year: "2014",
        title: "Collaboration",
        description: "The boat becomes a hub where artists meet to combine resources, abilities and ideas toward a vital creative life source, ART! The now-established onboard culture endorses the belief that creativity is essential to our happiness and survival, both as individuals and as a global family.",
        image: collaborations
      },
      {
        day: "12 of Ago",
        year: "2015",
        title: "Festivals",
        description: "Summer! Deck and doors are thrown open and creativity and stories are used to form inviting bridges into several waterside festival communities. These are wildly successful events and many land and boat participants join in celebrating the Valparaíso culture.",
        image: festivals
      },
      {
        day: "6 of Nov",
        year: "2015",
        title: "Making the Plan",
        description: "Brainstorming and discussions have been churning away for awhile and now there is definite and increasing momentum in the Valparaíso currents. With expanding skill and vision, Captain and community earnestly prepare to (officially) launch the next grand adventure!",
        image: theplan
      },
      {
        day: "26 of Feb",
        year: "2016",
        title: "Help us find a boat!",
        description: "Do you believe that this progressive culture can create mutually rewarding connections, that this ship can be a place where sustainability and art unite and that you can be a part of this destination? Share it on facebook , ask family and friends. spread the word",
        image: findaboat
      },
      {
        day: "5 of May",
        year: "2016",
        title: "Freedom Festival",
        description: "We where invited at various festivals to display our concept and show the onboard art. One of them was Vrijland where freedom was celebrated. Checkout the video at 2:17",
        image: freedom
      },
      {
        day: "13 of Jul",
        year: "2016",
        title: "Brest Maritima",
        description: "We stepped on the shore and went to France to explain our concept. Also we showed on the fly how stained glass is being made.",
        image: france
      },
      {
        day: "9 of Sep",
        year: "2016",
        title: "New Pirate Economy!",
        description: "We kicked off our New Pirate Economy for the first time on the shore! Not on the water anymore but we made a trade-tent where people could trade goods against stories.Also we rented out friends that could help people that lost their friends or their keys! For free of course ;)",
        image: trade
      },
      {
        day: "March",
        year: "2018",
        title: "Started the development of the Pirat App",
        description: "To be delivered by 2020, the aim is to connect people through goods, stories and skills, and show that everything has more worth than just money. We are looking for programmers, copywriters, funders and ambassadors to help deliver our goal, so get in touch if you want to be part of this exciting international work and shape the future of the New Pirate Economy.",
        image: pirateApp
      },
      {
        day: "Sep",
        year: "2018",
        title: "Began delivering Youth Exchanges",
        description: "In response to the growing youth unemployment rates across Europe, and the need to create new skills to equip younger generations with the future skills we need, Adventures of the Valparaiso is now delivering Youth Exchanges. We work with youth workers and young adults to help give them skills in a relaxed setting that they cannot otherwise access. To deliver trainings, become a youth exchange partner, or to find out more, email trainings@adventuresofthevalparaiso.com",
        image: trainings
      },
      {
        day: "Sep",
        year: "2021",
        title: "First Journey with the New Boat",
        description: "The sails will be unfurled and the course set! Exact date unknown.",
        image: newboat
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>

// You have to manually define the amount of items in the timeline !!
$items: 13;

/* Media Queries */

@mixin mq-xs {
  @media (min-width: 320px) {
    @content;
  }
}

@mixin mq-sm {
  @media (min-width: 480px) {
    @content;
  }
}

@mixin mq-md {
  @media (min-width: 720px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 1000px) {
    @content;
  }
}
hr {
  border: 1px solid var(--color-cerulean);
}
$background: transparent;
$box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
// $border: 1px solid var(--color-cerulean);
$border: none;
$rows: ceil($items/2);

/* Card sizing */

$card-height: 500px;
$card-width: 450px;
$inner-margin: 15px;
$number-size: 22px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */

$steps: #46b8e9;
$colors: #46b8e9,
#3ee9d1,
#ce43eb,
#4d92eb;
$timeline: var(--color-cerulean);

/* Calculations */

$container-height: $rows * ($card-height + $outer-margin) + $stagger;
$container-width: $card-width*2 + $outer-margin*3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */

@include mq-lg {
  %arrow {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 38px solid transparent;
    border-bottom: 38px solid transparent;
  }
  %marker {
    position: absolute;
    content: "";
    width: $marker-size;
    height: $marker-size;
    background-color: $timeline;
    border-radius: $marker-size;
    box-shadow: 0px 0px 2px 8px $background;
  }
}


/* Some Cool Stuff */

$counter: $items - $rows + 2;
@for $i from 1 through $rows {
  .card:nth-child(#{$i*2-1})   { order: $i }
  .card:nth-child(#{$i*2})     { order: $counter }
  $counter: $counter + 1;
}

/* Border Box */

* {
  box-sizing: border-box;
}

#timeline {
  padding: 0;
  background: $background;
  border-top: $border;
  border-bottom: $border;
  .card-wrapper {
    position: relative;
    margin: auto;
    @include mq-lg {
      display: flex;
      flex-flow: column wrap;
      width: $container-width;
      height: $container-height;
      margin: 0 auto;
    }
    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: $border;
      @include mq-lg {
        border-left: 1px solid $timeline;
      }
    }
  }
  .card {
    position: relative;
    display: block;
    margin: 10px auto 80px;
    max-width: 94%;
    z-index: 2;
		box-shadow: $box-shadow;
    @include mq-sm {
      max-width: 70%;
    }
    @include mq-md {
      max-width: 70%;
    }
    @include mq-lg {
      max-width: $card-width;
      height: $card-height;
      margin: $outer-margin;
      margin-top: $outer-margin/2;
      margin-bottom: $outer-margin/2;
      &:nth-child(odd) {
        margin-right: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-left-width: 45px;
          border-left-style: solid;
          left: 100%;
        }
        .head::before {
          @extend %marker;
          left: $marker-dist + 1;
        }
      }
      &:nth-child(even) {
        margin-left: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-right-width: 45px;
          border-right-style: solid;
          right: 100%;
        }
        .head::before {
          @extend %marker;
          right: $marker-dist - 1;
        }
      }
      &:nth-child(2) {
        margin-top: $stagger;
      }
    }
    .head {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--color-light);
      font-weight: 400;
      .date-box {
        display: inline;
        float: left;
        margin: 0;
        padding: 10px 10px 2px;
        line-height: 1.2;
        background: rgba(0, 0, 0, 0.17);
        .day {
          font-weight: 300;
          font-size: 14px;
        }
        .year {
          font-weight: bold;
          font-size: 28px;
        }
      }
      h2 {
        text-transform: uppercase;
        font-size: 1.4rem;
        line-height: 1;
        font-weight: bold;
        margin: 0;
        @include mq-xs {
          font-size: 1rem;
          line-height: 1;
        }
				@include mq-md {
          font-size: 1.2rem;
          line-height: 1;
        }
        span {
          display: block;
          font-size: 0.6rem;
          margin: 0;
          @include mq-sm {
            font-size: 0.8rem;
          }
        }
      }
    }
    .body {
      background: var(--color-cerulean);
      border: $border;
      border-top: 0;
      padding: $inner-margin 0 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      overflow: hidden;
      @include mq-lg {
        height: $body-height;
      }
      p {
        font-size: var(--font-size);
        text-align: left;
        line-height: 1.2;
        margin-bottom: $inner-margin;
      }
      img {
        width: 100%;
      }
    }
    .head::after {
      border-color: var(--color-cerulean);
    }
  }
}
</style>
