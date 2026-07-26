# `physic_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| member_id | int(11) | YES | MUL | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| dchdate | date | YES |  | NULL |  |  |
| physic_status_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| dch_status_id | int(11) | YES | MUL | NULL |  |  |
| physic_type_id | int(11) | YES | MUL | NULL |  |  |
| continue_service | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dch_status_id | dch_status_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_member_id | member_id | no | 1 |
| ix_physic_status_id | physic_status_id | no | 1 |
| ix_physic_type_id | physic_type_id | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530002248",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530003847",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530004348",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530006245",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530014151",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530015452",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530019354",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530020737",
    "member_id": null,
    "regdate": null,
    "dchdate": null,
    "physic_status_id": null,
    "doctor": null,
    "dch_status_id": null,
    "physic_type_id": null,
    "continue_service": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
