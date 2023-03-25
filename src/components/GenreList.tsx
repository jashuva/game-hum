import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom='10px'>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCroppedImageUrl(g.image_background)}
                boxSize='32px'
                objectFit='cover'
                borderRadius={8}
              />
              <Button
                textAlign='left'
                whiteSpace='normal'
                fontWeight={g.id === selectedGenre?.id ? 'bold' : ''}
                onClick={() => onSelectGenre(g)}
                fontSize='lg'
                variant='link'
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
