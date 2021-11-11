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

export const FilterNav: FunctionComponent = () => {
  return (
    <nav className={`filter-nav ${styles.root}`}>
      <Container className={styles.container}>
        <Heading as="h3" size="sm" transform="uppercase">Browse Movies <Text weight="medium" style="italic">By</Text></Heading>
        <DropDown defaultItem={0} items={filterBy} onChange={(e) => console.log(e)} />
        <DropDown defaultItem={0} items={filterDir} onChange={(e) => console.log(e)} />
      </Container>
    </nav>
  )
}