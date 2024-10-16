// mypageStyle.js
import styled from 'styled-components';

export const MyPageContainer = styled.main`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const MyPageHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const ProfileInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  .icons {
    font-size: 1.5rem;

    i {
      margin-left: 15px;
      cursor: pointer;
      color: #000000;

      &:hover {
        color: #007bff;
      }
    }
  }
  p {
  font-size: 1rem;
}

  p:hover {
    font-weight: bold;
  }
`;

export const ListGroupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  i {
    font-size: 1rem;
    color: #6c757d;
  }

  &:hover .action-icon {
    color: black;
  }
`;

export const CollapseContent = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const WishListContainer = styled.div`
  max-height: 300px;
`;

export const AddIcon = styled.a`
  font-size: 20px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

export const StyledWishList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const WishListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;

  img {
    width: 100px;
    height: auto;
    margin-right: 20px;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }

  .wish-icon {
    margin-left: auto;
    color: #ff0000;
    font-size: 1.5rem;
    padding: 5px;
    cursor: pointer;

    &:hover {
      /* color: #ff0000; */
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  thead th {
    background-color: #f8f9fa;
  }
`;
