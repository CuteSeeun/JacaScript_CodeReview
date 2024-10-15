import styled from 'styled-components';

export const CarListMainWrap = styled.div`
  padding: 20px;
`;

export const ContentWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const CarListBannerWrap = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
`;

export const CarListOutputWrap = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .outTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;

    strong {
      font-size: 20px;
      font-weight: bold;
    }

    select {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    li {
      width: calc(32% - 15px);
      list-style: none;
      border: 1px solid #ddd;
      padding: 5px;
      border-radius: 8px;
      position: relative;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .img {
        width: 100%;
        height: 150px;
        margin-bottom: 16px;
        background-color: #f4f4f4;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .carName {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .price {
        font-size: 20px;
        color: #007bff;
        font-weight: bold;
      }

      .sub-price {
        font-size: 14px;
        color: #888;
        margin-bottom: 16px;
      }

      .ZimBtn {
        position: absolute;
        top: 16px;
        right: 16px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 24px;
        color: #888;

        &:hover {
          color: red;
        }
      }
    }
  }
`;

export const CarListTopWrap = styled.div`
  .TopCard {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    input[type="text"] {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      color: #ffffff;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;