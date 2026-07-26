# `iclaim_consent_snapshot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_consent_snapshot_id | int(11) | NO | PRI | 0 |  |  |
| image | longblob | YES |  | NULL |  |  |
| capture_date | datetime | YES |  | NULL |  |  |
| iclaim_consent_report_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_consent_report1 | iclaim_consent_report_id | no | 1 |
| PRIMARY | iclaim_consent_snapshot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
