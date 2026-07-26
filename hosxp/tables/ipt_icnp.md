# `ipt_icnp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_icnp_id | int(11) | NO | PRI | 0 |  |  |
| icnp_classification_id | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| patient_cc_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_icnp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
