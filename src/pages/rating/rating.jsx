import React, { useState } from 'react';
import './rating.css'

import { hook } from '../../assets/hook/hook';
import serasaLogo from "../../assets/img/serasa-logo-full.svg";
import { FaStar } from "react-icons/fa";

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Heading from '../../components/heading/heading';

import Sucess from '../../components/sucess/sucess';
import Loading from '../../components/loading/loading';

export default function RatingPage() {
  const [star, setStar] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [isSucess, setIsSucess] = useState(null);

  const handleStar = (event) => {
    const { value } = event.target;
    setStar(value);
  }

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const handleDescription = (event) => {
    const { value } = event.target;
    setDescription(value);
  }

  const handleSubmit = () => {
    console.log('submitted')
    setError(null);
    setIsSucess(null);
    setIsRequesting(true);
    setIsLoading(true);


    let values = { star: star, name: name, description: description };
    hook(values)
      .then(() => {
        console.log('sucesso')
        setIsSucess(true);
        setName('');
        setRating('');
        setDescription('');
        setTimeout(() => {
          setIsSucess(false);
        }, 3500);
      })
      .catch(() => {
        setError(true);
        console.log('deu erro...')
      })
      .finally(() => {
        setIsRequesting(false);
        setIsLoading(false);
      })

  }

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div className='body'>
      <div className='container'>
        { isSucess &&
          <div className="sucess-loading">
            <div className="sucess-text">
              <Sucess />
            </div>
          </div>}
        <img src={serasaLogo} className="serasa-logo" alt="logo" />
        <div className='form'>
          <div className="form-label-title">
            <Heading theme={"headingS"}>
              Conte o quanto você está
              <p>satisfeito com nossos serviços</p>
            </Heading>
          </div>
          <div className="form-label-stars">
            <Heading theme={"headingXS"}>
              Marque de 1 à 5 estrelas
            </Heading>
          </div>
          <div className="form-stars">
            <div>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="star"
                      id="star"
                      value={star == ratingValue}
                      onClick={() => setRating(ratingValue)}
                      onChange={handleStar}
                    />
                    <FaStar
                      className="star"
                      color={
                        ratingValue <= (hover || rating)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                      size={40}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}></FaStar>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="form-box">
            <div className='row'>
              <Heading className="label" htmlFor={'nome'} component="label" theme={"bodyM-bold"}>Nome</Heading>
              <Input className="input" autoComplete='off' id="nome" name="nome" value={name} onChange={handleName}></Input>
            </div>
            <div className='row'>
              <Heading
                className="label"
                htmlFor={'descricao'}
                component="label"
                theme={"bodyM-bold"}>
                Comentário (Opcional)
              </Heading>
              <Input
                autoComplete='off'
                className="input"
                component="input"
                id="descricao"
                name="descricao"
                value={description}
                onChange={handleDescription}></Input>
            </div>
            <div className='row'>
            </div>
            <div className='button'>
              <Button onClick={handleSubmit} disabled={star == '' || name == '' || isRequesting}>Enviar avaliação</Button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
}