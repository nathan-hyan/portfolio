interface Props {
  orientation: 'y' | 'x'
}

const Separator = ({ orientation = 'y' }: Props) => {
  const OUTPUT =
    orientation === 'y'
      ? (
      <div className="d-none d-md-block divider-y shadow" />
        )
      : (
      <div className="divider-x shadow" />
        )

  return OUTPUT
}

export default Separator
