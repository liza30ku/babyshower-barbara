'use client';

import React, { useState } from "react";
import styles from "./page.module.css";
import { submitRSVP } from '../services/sheetsService';

const gifts = [
  {
    name: "Manta para bebé",
    img: "/gift9.png",
    link: "https://www.example.com/blanket",
    desc: "Caliente y cómoda manta para bebé",
    price: "S/. 100"
  },
  {
    name: "Cuna Corral",
    img: "/gift2.png",
    link: "https://www.example.com/rattle",
    desc: "Con Mecedora Y Sistema Musical Para Bebe",
    price: "S/. 232"
  },
  {
    name: "Pañalera",
    img: "/gift3.png",
    link: "https://www.example.com/bodysuit",
    desc: "Gris, para paseos",
    price: "S/. 189.90"
  },
  {
    name: "Canguro",
    img: "/gift4.png",
    link: "https://www.example.com/swaddle",
    desc: "Color menta",
    price: "S/. 179.90"
  },
  {
    name: "Protector de coche",
    img: "/gift5.png",
    link: "https://www.example.com/mat",
    desc: "Color menta",
    price: "S/.59.90"
  },
  {
    name: "Bodies",
    img: "/gift8.png",
    link: "https://www.example.com/book",
    desc: "Pack de 3 unidades",
    price: "S/. 40"
  },
  {
    name: "Silla para comer",
    img: "/gift7.png",
    link: "https://www.example.com/book",
    desc: "color celeste",
    price: "S/. 229"
  }
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRSVPSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const rsvpData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      attending: formData.get('attending') as string,
      guests: parseInt(formData.get('guests') as string),
      message: formData.get('message') as string,
      timestamp: new Date().toISOString()
    };

    try {
      const result = await submitRSVP(rsvpData);
      if (result.success) {
        alert('¡Gracias por confirmar tu asistencia!');
        setShowRSVPModal(false);
        // Reset form
        event.currentTarget.reset();
      } else {
        alert('Hubo un error al enviar tu confirmación. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Hubo un error al enviar tu confirmación. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.hero + ' ' + styles.fadeIn}>
        <h1 className={styles.title}>Baby shower</h1>
        <div className={styles.subtitle}>
          <span>Julio 24</span>
          <span className={styles.divider}>|</span>
          <span>4:00 PM</span>
        </div>
      </div>
      <div className={styles.gradient + ' ' + styles.fadeIn2} />
      <img src="/animal1.svg" alt="Animal" className={styles.animal + ' ' + styles.fadeIn3} />
      <div className={styles.waiting + ' ' + styles.fadeIn4}>La dulce espera de Maxim</div>
      <div className={styles.invite + ' ' + styles.fadeIn5}>
        Estamos encantados de celebrar la<br />
        próxima llegada de nuestro <br />
        bebé Maxim.<br />
        Esta ocasión tan especial merece una<br />
        maravillosa celebración, y no podemos<br />
        esperar para compartir este día mágico<br />
        con todos ustedes.
      </div>
      <div className={styles.infoBox + ' ' + styles.fadeIn5}>
        <div className={styles.infoContent}>
          <div className={styles.infoTitle}>Día</div>
          <div className={styles.infoText}>27 de julio, 2025</div>
          <div className={styles.infoTitle}>Hora</div>
          <div className={styles.infoText}>4:00 PM-9:00PM</div>
          <div className={styles.infoTitle}>Dirección</div>
          <div className={styles.infoText}>Av.28 de julio-Miraflores</div>
        </div>
        <img src="/animalito2.png" alt="Animalito" className={styles.infoAnimal} />
      </div>
      <div className={styles.invited}>
        <div className={styles.invitedTitle}>Estas invitado/a</div>
        <div className={styles.invitedText}>
          Por favor, ten en cuenta que el tema de nuestro baby shower es&nbsp;<b>bosque </b>.<br />
          Animamos a todos los invitados a vestirse con colores acorde con la temática y a llevar consigo su toque creativo.
        </div>
      </div>
      <div className={styles.confirmBg}>
        <div className={styles.confirmBox}>
          <img src="/animalito3.svg" alt="Animalito" className={styles.confirmAnimal} />
          <div className={styles.confirmTitle}>Maxim está en camino!</div>
          <div className={styles.confirmSub}>Por favor, confirma tu asistencia si planeas venir.</div>
          <div className={styles.confirmDate}>25 de abril de 2025 | 4:00 PM</div>
          <button 
            onClick={() => setShowRSVPModal(true)} 
            className={styles.confirmBtn}
          >
            Confirmar
          </button>
        </div>
      </div>
      <div className={styles.giftSection}>
        <div className={styles.giftTitle}>Lista de Regalos</div>
        <div className={styles.giftSubtitle}>
          Ayúdanos a preparar todo para la llegada de Maxim. Aquí tienes algunas&nbsp;regalos que nos encantarían.
        </div>
        <div className={styles.giftBox}>
          <div className={styles.giftBoxTitle}>¿Qué te gustaría regalar?</div>
          <div className={styles.giftBoxSub}>Haz click en el enlace para comprar)</div>
        </div>
        <div className={styles.giftCards}>
          {gifts.map((gift) => (
            <div key={gift.name} className={styles.giftCardWrapper}>
              <div className={styles.giftCard}>
                <a href={gift.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.giftCardInfo}>
                    <div className={styles.giftCardName}>{gift.name}</div>
                    <div className={styles.giftCardDesc}>{gift.desc}</div>
                    <div className={styles.giftCardPrice}>{gift.price}</div>
                  </div>
                  <img src={gift.img} alt={gift.name} className={styles.giftCardImg} />
                </a>
              </div>
              <div className={styles.giftBtnContainer}>
                <button
                  className={styles.giftBtn}
                  onClick={() => window.open('https://www.tbank.ru/cf/42vS6Vr3u0G', '_blank')}
                >
                  Regalar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className={styles.footerCustom}>
        <div className={styles.footerLogoBox}>
          <span className={styles.footerLogoText} onClick={() => setShowPopup(true)}>
            Куколка
          </span>
        </div>
        <div className={styles.footerContacts}>
          <div className={styles.footerEmail}>ulyanakukovskaya@gmail.com</div>
          <div className={styles.footerPhone}>+7 989 526 49 67</div>
        </div>
        {showPopup && (
          <div className={styles.footerPopupOverlay} onClick={() => setShowPopup(false)}>
            <div className={styles.footerPopup} onClick={e => e.stopPropagation()}>
              <div className={styles.footerPopupTitle}>¿Quieres una invitación personalizada?</div>
              <div className={styles.footerPopupText}>
                Si deseas una invitación para cualquier temática y tu propio estilo,<br />
                ¡contáctanos!<br /><br />
                <b>Email:</b> ulynakukovskaya@gmail.com<br />
                <b>Teléfono:</b> +7 989 526 49 67
              </div>
              <button className={styles.footerPopupClose} onClick={() => setShowPopup(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </footer>

      {/* Modal de confirmación RSVP */}
      {showRSVPModal && (
        <div className={styles.modalOverlay} onClick={() => setShowRSVPModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Confirmar Asistencia</h2>
              <button 
                className={styles.modalClose}
                onClick={() => setShowRSVPModal(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <form className={styles.rsvpForm} onSubmit={handleRSVPSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono:</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="attending">¿Asistirás?</label>
                  <select id="attending" name="attending" required className={styles.formSelect}>
                    <option value="">Selecciona una opción</option>
                    <option value="yes">Sí, asistiré</option>
                    <option value="no">No podré asistir</option>
                    <option value="maybe">Tal vez</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="guests">Número de invitados:</label>
                  <input 
                    type="number" 
                    id="guests" 
                    name="guests" 
                    min="1" 
                    max="5" 
                    defaultValue="1"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje (opcional):</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3} 
                    className={styles.formTextarea}
                    placeholder="Escribe un mensaje para los padres..."
                  ></textarea>
                </div>
                <div className={styles.formActions}>
                  <button 
                    type="button" 
                    onClick={() => setShowRSVPModal(false)}
                    className={styles.formCancel}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    className={styles.formSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Confirmar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
