# `xray_film`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| film_id | int(11) | NO | PRI | 0 |  |  |
| film_name | varchar(200) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_filmname | film_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | film_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "film_id": 1,
    "film_name": "14 x 17",
    "price": 170.0,
    "hos_guid": null,
    "icode": null
  },
  {
    "film_id": 2,
    "film_name": "12 x 15",
    "price": 170.0,
    "hos_guid": null,
    "icode": null
  },
  {
    "film_id": 3,
    "film_name": "11 x 14",
    "price": 170.0,
    "hos_guid": null,
    "icode": null
  },
  {
    "film_id": 4,
    "film_name": "10 x 12",
    "price": 150.0,
    "hos_guid": null,
    "icode": null
  },
  {
    "film_id": 5,
    "film_name": "8 x 10",
    "price": 150.0,
    "hos_guid": null,
    "icode": null
  },
  {
    "film_id": 6,
    "film_name": "7 x 17",
    "price": 150.0,
    "hos_guid": null,
    "icode": null
  }
]
```
