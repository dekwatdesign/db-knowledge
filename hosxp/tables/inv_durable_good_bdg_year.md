# `inv_durable_good_bdg_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_bdg_year_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_bdg_name | varchar(200) | YES | UNI | NULL |  |  |
| inv_durable_good_bdg_dt_begin | date | YES |  | NULL |  |  |
| inv_durable_good_bdg_dt_end | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_acc_bdg_year_name | inv_durable_good_bdg_name | yes | 1 |
| PRIMARY | inv_durable_good_bdg_year_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
