import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Layout from '../../layout';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';
import { getAdverts, getUi } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const { loading, error } = useSelector(getUi);
  const adverts = useSelector(getAdverts);
  const [filters, setFilters] = React.useState(getFilters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(advertsLoadAction());
  }, [dispatch]);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <Layout>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </Layout>
  );
}

export default AdvertsPage;
