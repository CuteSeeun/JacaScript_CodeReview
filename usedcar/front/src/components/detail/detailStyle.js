import styled from 'styled-components';

export const DetailMainWrap = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .main-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        padding: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
        margin-bottom: 20px;
    }

    .info-text {
        flex: 1;
        margin-right: 20px;
        
        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        p {
            font-size: 16px;
            color: #666;
        }
    }

    .price-details {
        text-align: right;
        margin-left: auto;
        
        .price,
        .monthly-payment {
            font-size: 18px;
            color: #000;
            margin: 5px 0;
        }

        .price strong,
        .monthly-payment strong {
            color: #007bff;
            font-size: 24px;
            margin-left: 5px;
        }
    }

    .contact-buttons {
        display: flex;
        gap: 10px;
        margin-left: 20px;
        button {
            background-color: #fff;
            border: 1px solid #007bff;
            color: #007bff;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                background-color: #007bff;
                color: #fff;
            }
        }
        .onBtn{width:400px; font-size:20px;}
    }

    .image-section {
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;

        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }

    .info-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
    }

    .info-card {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        .main-info {
            flex-direction: column;
            align-items: center;
        }

        .image-section {
            max-width: 100%;
        }

        .info-section {
            flex-direction: column;
            align-items: center;
        }

        .info-card {
            width: 100%;
            margin-bottom: 20px;
        }
    }
`;

export const DetailUserWrap = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .main-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        padding: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
        margin-bottom: 20px;
    }

    .info-text {
        flex: 1;
        margin-right: 20px;
        
        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        p {
            font-size: 16px;
            color: #666;
        }
    }

    .price-details {
        text-align: right;
        margin-left: auto;
        
        .price,
        .monthly-payment {
            font-size: 18px;
            color: #000;
            margin: 5px 0;
        }

        .price strong,
        .monthly-payment strong {
            color: #007bff;
            font-size: 24px;
            margin-left: 5px;
        }
    }

    .contact-buttons {
        display: flex;
        gap: 10px;
        margin-left: 20px;

        button {
            background-color: #fff;
            border: 1px solid #007bff;
            color: #007bff;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;

            &:hover {
                background-color: #007bff;
                color: #fff;
            }
        }
    }

    .image-section {
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;
        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }

    .info-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;

        .sellState{
            select{width:150px; font-size:20px; text-align:center; height:50px;
                margin-bottom: 15px; border-radius: 8px;
            }
        }

        .userBtn {
            
             button{width:150px; height:50px; margin-right: 5px;
            background: #fff; color:#000; border: 1px solid #000;
                border-radius: 8px; font-size: 15px;
                
        }   
            .editBtn{
                &:hover{background: #007bff; color:#fff;}
            }
            .delBtn{
                &:hover{background: #007bff; color:#fff;}
            }
        }
        
    }

    .info-card {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        span {
            min-width: 80px; 
            margin-right: 10px; 
        }
        input {
            flex: 1; 
        }
            }
        
.info-card .input-group {
  display: flex;
  align-items: center; 
  margin-bottom: 10px; 
}

    h3 {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        .main-info {
            flex-direction: column;
            align-items: center;
        }

        .image-section {
            max-width: 100%;
        }

        .info-section {
            flex-direction: column;
            align-items: center;
        }

        .info-card {
            width: 100%;
            margin-bottom: 20px;
        }


    }
`