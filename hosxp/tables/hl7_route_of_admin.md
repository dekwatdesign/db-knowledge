# `hl7_route_of_admin`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hl7_route_of_admin_code | varchar(15) | NO | PRI |  |  |  |
| hl7_route_of_admin_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hl7_route_of_admin_name | hl7_route_of_admin_name | yes | 1 |
| PRIMARY | hl7_route_of_admin_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "hl7_route_of_admin_code": "IM",
    "hl7_route_of_admin_name": "Injection, intramuscular"
  },
  {
    "hl7_route_of_admin_code": "SQ",
    "hl7_route_of_admin_name": "Injection, subcutaneous"
  },
  {
    "hl7_route_of_admin_code": "PO",
    "hl7_route_of_admin_name": "Swallow, oral"
  },
  {
    "hl7_route_of_admin_code": "NP",
    "hl7_route_of_admin_name": "Inhalation, nasal cannula\t"
  },
  {
    "hl7_route_of_admin_code": "IDINJ",
    "hl7_route_of_admin_name": "Injection, intradermal"
  }
]
```
