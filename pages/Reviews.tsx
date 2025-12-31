
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Star, MessageSquare, Quote, User, MapPin, ChevronDown } from 'lucide-react';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  origin?: string;
  lang?: string;
}

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(10);

  const allReviews: Review[] = [
    { name: "Sylvie", date: "Oct 2025", rating: 5, text: "Logement très bien et conforme aux photos et descriptif. Il se trouve dans un quartier résidentiel à 10 mn du métro au dessus du marché. L’arrivée se fait en autonomie avec les boites à clés.", lang: "fr" },
    { name: "Nathalie", date: "Aug 2025", rating: 5, text: "La maison de Christophe, directement sur la plage ne pourrait pas être mieux située. Le mobilier est confortable et de très bon goût! Nous avons adoré la déco et tous les détails qui en font une...", lang: "fr" },
    { name: "Gabriel", date: "Aug 2025", rating: 5, text: "Outstanding stay! The house is perfectly located right on the beach with an amazing view. The decoration is tasteful, and the bathrooms are brand new and comfortable. The staff is wonderful, always...", lang: "en" },
    { name: "Gabrielle", date: "May 2025", rating: 3, text: "A localização da casa é perfeita. Ronaldo e Tainara, funcionários da casa, são MARAVILHOSOS, deram pronta resposta para tudo que podiam nos ajudar. No entanto, ficamos decepcionados com a condição da...", lang: "pt" },
    { name: "Pedro", date: "Apr 2025", rating: 5, text: "Great place, amazing spot! I would definitely come back.", lang: "en" },
    { name: "Leonardo", date: "Feb 2025", rating: 2, text: "Esperava ter bem mais conforto pelo preço que foi pago. O lugar é bonito e a casa bem decorada na parte social. Pela ausência de ar condicionado, é preciso dormir com as janelas abertas.", lang: "pt" },
    { name: "Alexandra", date: "Jan 2025", rating: 5, text: "Un lugar muy acogedor y el anfitrión es muy amable, tuvimos un problema y nos pudo ayudar!!, todo fue perfecto :) esperamos volver pronto", lang: "es" },
    { name: "Elisa", date: "Dec 2024", rating: 5, text: "la casa de Christophe es simplemente estupenda, en un paraiso! todavía más espectacular de lo que se aprecia en las fotos. Y lo mejor de todo, la amabilidad y simpatia di Ronaldo que nos ha hecho...", lang: "es" },
    { name: "Sad", date: "Dec 2024", rating: 5, text: "Malheureusement nous avons dû quitter l’appartement de manière anticipée pour des raisons perso mais je tiens à souligner la gentillesse de Christophe! Vraiment sympa.", lang: "fr" },
    { name: "Paul", date: "Nov 2024", rating: 5, text: "Beautiful house right on the beach with a great housekeeper team who were super helpful. highly recommended.", lang: "en" },
    { name: "Patricia", date: "Nov 2024", rating: 5, text: "Logement confortable, accueillant et en bon état.", lang: "fr" },
    { name: "Doran", date: "Oct 2024", rating: 5, text: "J'ai passé un bon moment pendant mon sejour. Christophe a été réactif, et l'appartement était assez grand et moderne.", lang: "fr" },
    { name: "Isabella", date: "Jul 2024", rating: 5, text: "Casa maravilhosa, localização perfeita, na beira da praia mas com privacidade. Destaque para Zil que cozinhou nossas melhores refeições e Ronaldo extremamente solícito.", lang: "pt" },
    { name: "Bani", date: "Jun 2024", rating: 4, text: "The apartment is very cosy and quiet, in a basement but that gives onto a small garden. Well equipped and easy to use.", lang: "en" },
    { name: "Rodrigo", date: "Mar 2024", rating: 4, text: "Casa perfeita para descansar, especialmente grupo com crianças pequenas. Ambiente tranquilo, seguro, na beira da praia e com águas calmas.", lang: "pt" },
    { name: "Renata", date: "Dec 2023", rating: 5, text: "Casa muito bem situada, pé na areia. Ambientes muito arejados, amplos e confortáveis. Tudo o que esperávamos.", lang: "pt" },
    { name: "Alana", date: "Dec 2023", rating: 5, text: "Casa excelente. Muito espaçosa, cabem 10 pessoas com conforto, muitos lugares disponíveis para sentar em todos os cômodos. Cozinha bem equipada.", lang: "pt" },
    { name: "Geraldine", date: "Nov 2023", rating: 5, text: "Amazing place, we'll miss it! Thank you Christophe", lang: "en" },
    { name: "Daniel", date: "Nov 2023", rating: 4, text: "The house is rústico but perfect. Location is the best, people working super nice and prestative. 100% recommended.", lang: "en" },
    { name: "Isabela", date: "Oct 2023", rating: 5, text: "A estadia foi maravilhosa! Fui com minha família e todos amaram. Cristophe foi muito atencioso e gentil com a gente.", lang: "pt" },
    { name: "Lorraine", date: "Aug 2023", rating: 5, text: "la maison de Christophe a tout d'abord une situation exceptionnelle sur la plage. le responsable de la maison a été incroyable.", lang: "fr" },
    { name: "Myriam", date: "Aug 2023", rating: 5, text: "Séjour en famille, nous étions 7. Nous avons passé 4 jours et 4 nuits dans cette merveilleuse maison, très belle, très spacieuse.", lang: "fr" },
    { name: "Sven", date: "Jul 2023", rating: 5, text: "What a place. We really enjoyed our stay in Moreré and the house of Christophe. I hope we can get back to that wonderful place.", lang: "en" },
    { name: "Domenico", date: "Jun 2023", rating: 5, text: "Abitazione, piccola ma molto carina e confortevole.", lang: "it" },
    { name: "Jey", date: "May 2023", rating: 5, text: "Nous remercions Christophe et Catherine pour leur disponibilité et réactivité. Nous avons passés un agréable séjour.", lang: "fr" },
    { name: "Bernard", date: "Apr 2023", rating: 5, text: "Rapport qualité/prix excellent. Logement de construction récente très agréable, moderne, confortable, calme.", lang: "fr" },
    { name: "Nabiha", date: "Mar 2023", rating: 5, text: "Je recommande vivement cette adresse. Si le confort, la propreté, la sérénité et le calme sont vos priorités, n'hésitez pas.", lang: "fr" },
    { name: "Patrick", date: "Mar 2023", rating: 5, text: "We had a super time at this House right on the beach with some bars and restaurant you can walk barefoot to.", lang: "en" },
    { name: "Giovanna", date: "Mar 2023", rating: 5, text: "Christophe e Caroline sono stati fantastici: purtroppo abbiamo avuto numerosi problemas con i voli e loro sono stati disponibili.", lang: "it" },
    { name: "Rita", date: "Mar 2023", rating: 5, text: "Very pleasant place to stay! Quiet and modern. The heated floors are a must!", lang: "en" },
    { name: "Laure", date: "Feb 2023", rating: 5, text: "Couple avec un enfant de moins d’1 an, nous avons passé un séjour très agréable chez Christophe et Caroline.", lang: "fr" },
    { name: "Mehdi", date: "Jan 2023", rating: 5, text: "Sejour parfait!", lang: "fr" },
    { name: "Ellen", date: "Jan 2023", rating: 5, text: "This Airbnb was perfect for our honeymoon! Christophe was very nice and helpful in giving recommendations.", lang: "en" },
    { name: "Charlotte", date: "Dec 2022", rating: 5, text: "beautiful place, and cristophe was there for everything i needed and more", lang: "en" },
    { name: "Audrey", date: "Dec 2022", rating: 5, text: "Excellent long séjour dans cet appartement spacieux, très confortable et bien équipé! On s’y sent tellement bien.", lang: "fr" },
    { name: "Eduardo", date: "Dec 2022", rating: 5, text: "A melhor hospedagem de Moreré. com certeza eu e minha família iremos voltar em 2023.", lang: "pt" },
    { name: "Fiorella", date: "Oct 2022", rating: 5, text: "Christophe’s flat was amazing! Spacious, great location, beautiful view, and all the amenities a person may need.", lang: "en" },
    { name: "Maria Emília", date: "Oct 2022", rating: 5, text: "A casa é exatamente como no anúncio, pé na areia, uma maravilha! Mas o melhor de tudo é a presença de Zil e Ronaldo.", lang: "pt" },
    { name: "Eduardo", date: "Apr 2022", rating: 5, text: "Casa perfeita em uma localização extremamente privilegiada. Os quartos são espaçosos e abrigam até 10 pessoas.", lang: "pt" },
    { name: "Florence", date: "Apr 2022", rating: 5, text: "Morere est un endroit enchanteur et cette maison, la cerise sur le gâteau. Nous avons passé un séjour parfait.", lang: "fr" },
    { name: "Talita", date: "Mar 2022", rating: 5, text: "Amamos conhecer a sua casa! Zil e Ronaldo nos receberam muito bem! Esperamos voltar logo!", lang: "pt" },
    { name: "Roberta", date: "Oct 2021", rating: 5, text: "A casa é linda e muitíssimo bem localizadas. A arquitetura rústica, o pé direito alto, muitos elementos em madeira.", lang: "pt" },
    { name: "Gabriel", date: "May 2021", rating: 5, text: "O fim de semana prolongado na casa foi maravilhoso. A Zil e o Ronaldo nos ajudaram com tudo.", lang: "pt" },
    { name: "Miguel", date: "Mar 2021", rating: 5, text: "A casa é maravilhosa... uma planta aberta que valoriza essa praia linda. Paradisíaca..", lang: "pt" },
    { name: "Diego", date: "Dec 2020", rating: 5, text: "Lugar e hospitalidade maravilhosas. Fomos muito bem recepcionados e assistidos pelas pessoas que cuidam do lugar.", lang: "pt" },
    { name: "Samuel", date: "Dec 2020", rating: 5, text: "This place is a gem! I had an amazing experience at Christophe house. Everything was way better than I expected!", lang: "en" },
    { name: "Jayita", date: "Jan 2020", rating: 5, text: "Casa charmosa, bem equipada, em frente ao mar. Tudo de bom! Vivemos uma experiência incrível!", lang: "pt" },
    { name: "Patrick", date: "Aug 2019", rating: 5, text: "Un endroit rare qui réuni à la fois des paysages magnifiques, une parenthèse hors du temps et du stress.", lang: "fr" },
    { name: "Kim", date: "May 2019", rating: 5, text: "The pictures show how amazing the home is - you will not be disappointed.", lang: "en" },
    { name: "Kacey", date: "Mar 2019", rating: 5, text: "Beautifully landscaped tropical feel. Lots of quiet spots in property to hang out. The house made the vacation!", lang: "en" },
    { name: "Brian", date: "Feb 2019", rating: 3, text: "The house has no window blinds in any of the bedrooms or common areas had a few issues with the plumbing.", lang: "en" },
    { name: "Shevi", date: "Dec 2018", rating: 5, text: "amazing place to stay. gr8 grounds and the host was extremely hospitable", lang: "en" },
    { name: "Segolene", date: "Dec 2018", rating: 5, text: "Amazing house, Moreré is a wonderful island. Zile, who cleans the house daily, is also an amazing cook.", lang: "fr" },
    { name: "Isabelle", date: "Feb 2018", rating: 5, text: "Very beautiful, big house on the beach. Close to the supermarket. Drop off by boat right in front of the house.", lang: "en" },
    { name: "Carla", date: "Jan 2018", rating: 5, text: "La casa es preciosa, espaciosa, Cálida y con excelentes detalles. Si cocina está muy bien equipada.", lang: "es" }
  ];

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, allReviews.length));
  };

  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-ocean text-white pt-56 pb-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sunlight font-black text-[12px] uppercase tracking-luxury mb-8 block">Testimonials</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 leading-tightest font-black tracking-tightest">{t.nav.reviews}</h1>
          <div className="flex items-center justify-center gap-6">
            <div className="flex text-sunlight">
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
            </div>
            <span className="text-2xl font-light opacity-60">4.92 Average Rating</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-20 mb-56">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1 bg-white p-14 rounded-sm shadow-2xl flex flex-col items-center justify-center border-b-[6px] border-sunlight">
            <span className="text-7xl font-serif text-ocean-900 font-black mb-4 tracking-tightest">4.92</span>
            <div className="flex text-sunlight mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-[10px] uppercase font-black tracking-luxury text-gray-400">55 Verified Reviews</span>
          </div>
          
          <div className="lg:col-span-3 bg-white p-14 rounded-sm shadow-2xl grid grid-cols-2 md:grid-cols-3 gap-12 items-center border-b-[6px] border-ocean">
            {[
              { label: "Cleanliness", val: "4.9" },
              { label: "Communication", val: "5.0" },
              { label: "Check-in", val: "4.9" },
              { label: "Location", val: "5.0" },
              { label: "Accuracy", val: "4.9" },
              { label: "Value", val: "4.8" }
            ].map(stat => (
              <div key={stat.label}>
                <div className="flex justify-between text-[10px] uppercase font-black tracking-premium text-gray-400 mb-4">
                  <span>{stat.label}</span>
                  <span className="text-ocean font-black">{stat.val}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-ocean" style={{ width: `${(parseFloat(stat.val) / 5) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {allReviews.slice(0, visibleCount).map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white p-14 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-gray-100 group animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: `${(idx % 10) * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center text-ocean-900 font-serif text-3xl border border-gray-100 shadow-inner group-hover:bg-ocean group-hover:text-white transition-colors duration-700 font-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ocean-900 font-black tracking-tightest">{review.name}</h3>
                    <p className="text-[10px] uppercase font-black tracking-luxury text-gray-400 mt-2">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-sunlight/40 group-hover:text-sunlight transition-colors duration-700 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i >= review.rating ? "text-gray-200" : ""}
                    />
                  ))}
                </div>
              </div>

              <div className="relative flex-grow">
                <p className="text-gray-600 leading-relaxed-extra font-light text-xl md:text-2xl relative z-10 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-50 flex items-center justify-between text-[10px] font-black uppercase tracking-luxury text-gray-300">
                <span className="flex items-center gap-4">
                  <MessageSquare size={16} className="opacity-40" />
                  Verified Direct Guest
                </span>
                {review.lang && (
                  <span className="px-4 py-1.5 bg-offwhite rounded-sm text-ocean-900/60">
                    {review.lang.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allReviews.length && (
          <div className="mt-28 flex justify-center">
            <button 
              onClick={loadMore}
              className="group flex flex-col items-center gap-8"
            >
              <span className="text-[12px] font-black uppercase tracking-luxury text-ocean-900">Discover More Experiences</span>
              <div className="w-16 h-16 rounded-full border border-ocean/20 flex items-center justify-center group-hover:bg-ocean group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-xl">
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </div>
            </button>
          </div>
        )}

        <div className="mt-56 p-20 bg-ocean-900 rounded-sm text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-1/2"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-10 leading-tight font-black tracking-tightest">Authentic guest experiences since 2018</h2>
              <p className="text-white/40 text-[11px] uppercase font-black tracking-luxury mb-16">All reviews are synchronized from our verified OTA and direct booking profiles</p>
              <a 
                href="https://www.airbnb.com/rooms/1572948" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-14 py-6 border-2 border-white/20 text-white text-[11px] font-black uppercase tracking-luxury hover:bg-white hover:text-ocean transition-all duration-500 shadow-xl"
              >
                View original profile on Airbnb
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
