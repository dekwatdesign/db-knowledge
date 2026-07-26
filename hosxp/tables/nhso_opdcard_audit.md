# `nhso_opdcard_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_opdcard_audit_id | int(11) | NO | PRI | 0 |  |  |
| nhso_opdcard_audit_vn | varchar(12) | YES | MUL | NULL |  |  |
| nhso_opdcard_audit_hn | varchar(9) | YES | MUL | NULL |  |  |
| nhso_opdcard_audit_an | varchar(12) | YES | MUL | NULL |  |  |
| nhso_opdcard_audit_servicedate | datetime | YES |  | NULL |  |  |
| nhso_opdcard_audit_status_id | int(11) | YES | MUL | NULL |  |  |
| nhso_opdcard_audit_import_dt | datetime | YES |  | NULL |  |  |
| nhso_opdcard_audit_export_dt | datetime | YES |  | NULL |  |  |
| nhso_opdcard_audit_update_dt | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fk_audit_status | nhso_opdcard_audit_status_id | no | 1 |
| ix_idx_nhso_opdcard_audit_an | nhso_opdcard_audit_an | no | 1 |
| ix_idx_nhso_opdcard_audit_hn | nhso_opdcard_audit_hn | no | 1 |
| ix_idx_nhso_opdcard_audit_vn | nhso_opdcard_audit_vn | no | 1 |
| PRIMARY | nhso_opdcard_audit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
