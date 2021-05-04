import React from 'react';
import { Redirect } from 'react-router-dom';

import Layout from '../../layout';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { getAdverts } from '../../../api/adverts';
import { defaultFilters, filterAdverts } from './filters';
import usePromise from '../../../hooks/usePromise';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const { isPending: isLoading, error, execute, data: adverts } = usePromise(
    []
  );
  const [filters, setFilters] = React.useState(getFilters);

  React.useEffect(() => {
    execute(getAdverts());
  }, []);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <Layout>
      <div className="flex">
        <div className="static top-24 w-1/4 border-r border-gray-300">
          <FiltersForm
            initialFilters={filters}
            defaultFilters={defaultFilters}
            prices={adverts.map(({ price }) => price)}
            onFilter={setFilters}
          />
        </div>
        {filteredAdverts.length ? (
          <AdvertsList adverts={filteredAdverts} />
        ) : (
          <EmptyList advertsCount={adverts.length} />
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;
