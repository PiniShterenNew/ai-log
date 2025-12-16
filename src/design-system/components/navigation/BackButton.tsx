import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../controls/Button';
import { Icon } from '../content/Icon';
import { Stack } from '../layout/Stack';

export interface BackButtonProps {
  to?: string;
  onClick?: () => void;
  preserveState?: boolean;
}

export function BackButton({ to, onClick, preserveState = false }: BackButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      if (preserveState && location.search) {
        navigate(`${to}${location.search}`);
      } else {
        navigate(to);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <Button variant="ghost" onClick={handleClick} size="sm" className="w-auto self-start">
      <Stack variant="toolbar">
        <Icon name="ChevronLeftIcon" variant="sm" />
        Back
      </Stack>
    </Button>
  );
}

