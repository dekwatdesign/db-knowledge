# `drugitems_factor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| factor_per_kg | double(15,3) | YES |  | NULL |  |  |
| line1 | varchar(150) | YES |  | NULL |  |  |
| line2 | varchar(150) | YES |  | NULL |  |  |
| line3 | varchar(150) | YES |  | NULL |  |  |
| target_max_age | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "icode": "1540002",
    "factor_per_kg": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "target_max_age": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
