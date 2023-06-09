import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area='nav'>
          <NavBar OnSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Box paddingLeft={9}>
            <GameHeading gameQuery={gameQuery} />
            <Flex>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                  selectedPlatform={gameQuery.platform}
                />
              </Box>

              <SortSelector
                onSelectSortOrder={(ordering) => setGameQuery({ ...gameQuery, ordering })}
                ordering={gameQuery.ordering}
              />
            </Flex>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
