# `stock_bdg_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bdg_year | int(11) | NO | PRI | 0 |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| status_open | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bdg_year | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "bdg_year": 2548,
    "begin_date": "2005-10-01",
    "end_date": "2006-09-30",
    "status_open": "Y",
    "hos_guid": null
  },
  {
    "bdg_year": 2549,
    "begin_date": "2006-10-01",
    "end_date": "2007-09-30",
    "status_open": "Y",
    "hos_guid": null
  }
]
```
