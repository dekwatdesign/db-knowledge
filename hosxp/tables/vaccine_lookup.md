# `vaccine_lookup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_lookup_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_code | varchar(20) | YES | MUL | NULL |  |  |
| lookup_value | varchar(150) | YES | MUL | NULL |  |  |
| export_code | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | vaccine_code | yes | 1 |
| ix_unique | lookup_value | yes | 2 |
| ix_unique_index | lookup_value | yes | 1 |
| ix_unique_index | vaccine_code | yes | 2 |
| PRIMARY | vaccine_lookup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
