import { FunctionComponent } from 'react';
import { Container } from '~components/atoms/container';
import { Heading } from '~components/atoms/heading';
import { Text } from '~components/atoms/text'
import { DropDown } from '~components/molecules/drop-down';

import styles from './filter-nav.module.scss'

const filterBy = [
  {name: 'Popularity', value: 'popularity', href: ''},
  {name: 'Release Date', value: 'release_date', href: ''},
  {name: 'Votes', value: 'vote_count', href: ''},
]

const filterDir = [
  {name: 'Highest', value: 'desc', href: ''},
  {name: 'Lowest', value: 'asc', href: ''},
]

export interface IFilterNav {
  categoryChange: any
  directionChange: any
}

export const FilterNav: FunctionComponent<IFilterNav> = ({ categoryChange, directionChange }) => {
  return (
    <nav className={`filter-nav ${styles.root}`}>
      <Container className={styles.container}>
        <div className={styles.titleWrap}>
          <Heading as="h3" size="sm" transform="uppercase">Browse Movies <Text weight="medium" style="italic">By</Text></Heading>
        </div>
        <DropDown defaultItem={0} items={filterBy} onChange={categoryChange} />
        <DropDown defaultItem={0} items={filterDir} onChange={directionChange} />
      </Container>
    </nav>
  )
}