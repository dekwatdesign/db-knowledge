# `village_organization_member_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_organization_member_service_id | int(11) | NO | PRI | 0 |  |  |
| village_organization_mid | int(11) | YES | MUL | NULL |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_mid | village_organization_mid | no | 1 |
| ix_search_id | village_organization_mid | no | 1 |
| ix_search_id | house_id | no | 2 |
| ix_search_id_index | house_id | no | 1 |
| ix_search_id_index | village_organization_mid | no | 2 |
| PRIMARY | village_organization_member_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_organization_member_service_id": 1,
    "village_organization_mid": 2,
    "house_id": 189,
    "village_id": 1,
    "hos_guid": "{1E279802-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 24,
    "village_organization_mid": 179,
    "house_id": 2758,
    "village_id": 1,
    "hos_guid": "{1E27A0E9-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 25,
    "village_organization_mid": 179,
    "house_id": 2901,
    "village_id": 1,
    "hos_guid": "{1E27A78C-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 26,
    "village_organization_mid": 179,
    "house_id": 2803,
    "village_id": 1,
    "hos_guid": "{1E27ADDC-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 27,
    "village_organization_mid": 179,
    "house_id": 187,
    "village_id": 1,
    "hos_guid": "{1E27B409-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 28,
    "village_organization_mid": 179,
    "house_id": 191,
    "village_id": 1,
    "hos_guid": "{1E27BA22-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 29,
    "village_organization_mid": 179,
    "house_id": 190,
    "village_id": 1,
    "hos_guid": "{1E27C05E-E616-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "village_organization_member_service_id": 30,
    "village_organization_mid": 179,
    "house_id": 192,
    "village_id": 1,
    "hos_guid": "{1E27C676-E616-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
