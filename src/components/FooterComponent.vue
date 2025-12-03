<template>
    <div class="flex min-h-80 w-full justify-center bg-[#3d3c3c] p-12">
        <div class="container mx-auto grid w-full max-w-7xl grid-cols-4 gap-6 text-white">
            <div class="flex flex-col gap-3">
                <p>{{ $t('footer.slogan') }}</p>
                <h1 class="text-xl font-bold uppercase">Rabit Notebuck</h1>
            </div>
            <div>
                <h1 class="pb-4 text-xl font-medium" style="font-family: 'Cormorant Garamond'">
                    {{ $t('footer.about_crabit') }}
                </h1>
                <ul class="flex flex-col gap-1">
                    <li>{{ $t('footer.intro') }}</li>
                    <li>{{ $t('footer.product_advantages') }}</li>
                    <li>{{ $t('footer.inspiration') }}</li>
                </ul>
            </div>
            <div>
                <h1 class="pb-4 text-xl font-medium" style="font-family: 'Cormorant Garamond'">
                    {{ $t('footer.customer_policy') }}
                </h1>
                <ul class="flex flex-col gap-1">
                    <li>{{ $t('footer.bulk_order') }}</li>
                    <li>{{ $t('footer.personal_order') }}</li>
                </ul>
            </div>
            <div>
                <h1 class="pb-4 text-xl font-medium" style="font-family: 'Cormorant Garamond'">
                    {{ $t('footer.newsletter') }}
                </h1>
                <p>{{ $t('footer.newsletter_desc') }}</p>
            </div>
        </div>
    </div>
</template>
