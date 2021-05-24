import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import Layout from '../../layout';
import AdvertDetail from './AdvertDetail';
import { getAdvertDetail, getUi } from '../../../store/selectors';
import {
  advertsDeleteAction,
  advertsDetailAction,
} from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
  const { loading, error } = useSelector(getUi);
  const advert = useSelector(state => getAdvertDetail(state, advertId));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(advertsDetailAction(advertId));
  }, [dispatch, advertId]);

  const handleDelete = () => {
    dispatch(advertsDeleteAction(advertId));
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <Layout>
      {advert && <AdvertDetail {...advert} onDelete={handleDelete} />}
    </Layout>
  );
}

export default AdvertPage;
