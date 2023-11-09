const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.NetherStar.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.NetherStar.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    GTMaterials.Trinium.setProperty($PropertyKey.ORE, new $OreProperty(1, 1, true))

    event.create('inert_nether_essence')
        .fluid()
        .color(0x500bbf)

    event.create("trinaquadalloy")
        .ingot().fluid()
        .color(0x281832).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)
})