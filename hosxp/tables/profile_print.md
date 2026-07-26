# `profile_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_rx_number | int(11) | NO | PRI | 0 |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | med_rx_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_rx_number": 1821,
    "print_count": 1,
    "hos_guid": null
  },
  {
    "med_rx_number": 1823,
    "print_count": 1,
    "hos_guid": null
  },
  {
    "med_rx_number": 1824,
    "print_count": 1,
    "hos_guid": null
  },
  {
    "med_rx_number": 1836,
    "print_count": 2,
    "hos_guid": null
  },
  {
    "med_rx_number": 1839,
    "print_count": 4,
    "hos_guid": null
  },
  {
    "med_rx_number": 1841,
    "print_count": 1,
    "hos_guid": null
  },
  {
    "med_rx_number": 1844,
    "print_count": 4,
    "hos_guid": null
  },
  {
    "med_rx_number": 1845,
    "print_count": 1,
    "hos_guid": null
  }
]
```
