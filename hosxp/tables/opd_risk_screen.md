# `opd_risk_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| advice_staff | varchar(25) | YES |  | NULL |  |  |
| hypertension_risk | char(1) | YES |  | NULL |  |  |
| diabete_risk | char(1) | YES |  | NULL |  |  |
| heart_risk | char(1) | YES |  | NULL |  |  |
| risk_memo | text | YES |  | NULL |  |  |
| hypoglycemia_risk | char(1) | YES |  | NULL |  |  |
| mi_risk | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
